import React, { createContext, useCallback, useEffect, useMemo, useState } from 'react';
import * as authApi from '../api/auth';

const STORAGE_KEY = 'saranya.accessToken';

export type AuthContextValue = {
  token: string | null;
  user: authApi.JwtUser | null;
  initializing: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider(props: { children: React.ReactNode }) {
  const [token, setToken] = useState<string | null>(() => localStorage.getItem(STORAGE_KEY));
  const [user, setUser] = useState<authApi.JwtUser | null>(null);
  const [initializing, setInitializing] = useState(true);

  const logout = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    setToken(null);
    setUser(null);
  }, []);

  const login = useCallback(async (email: string, password: string) => {
    const { accessToken } = await authApi.login(email, password);
    localStorage.setItem(STORAGE_KEY, accessToken);
    setToken(accessToken);
  }, []);

  useEffect(() => {
    let cancelled = false;

    async function init() {
      try {
        if (!token) {
          if (!cancelled) {
            setUser(null);
            setInitializing(false);
          }
          return;
        }

        const res = await authApi.me(token);
        if (!cancelled) {
          setUser(res.user);
          setInitializing(false);
        }
      } catch {
        if (!cancelled) {
          logout();
          setInitializing(false);
        }
      }
    }

    setInitializing(true);
    void init();

    return () => {
      cancelled = true;
    };
  }, [token, logout]);

  const value = useMemo<AuthContextValue>(
    () => ({ token, user, initializing, login, logout }),
    [token, user, initializing, login, logout],
  );

  return <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>;
}

export function useAuth(): AuthContextValue {
  const ctx = React.useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
