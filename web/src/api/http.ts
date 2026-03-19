import { API_BASE_URL } from '../config';

export class ApiError extends Error {
  readonly status: number;
  readonly details?: unknown;

  constructor(message: string, status: number, details?: unknown) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.details = details;
  }
}

async function readErrorMessage(res: Response): Promise<{ message: string; details?: unknown }> {
  const contentType = res.headers.get('content-type') ?? '';
  if (!contentType.includes('application/json')) {
    return { message: `${res.status} ${res.statusText}` };
  }

  try {
    const json = await res.json();
    const msg =
      typeof json?.message === 'string'
        ? json.message
        : Array.isArray(json?.message)
          ? json.message.join(', ')
          : `${res.status} ${res.statusText}`;

    return { message: msg, details: json };
  } catch {
    return { message: `${res.status} ${res.statusText}` };
  }
}

export async function apiFetch<T>(
  path: string,
  options: {
    method?: string;
    token?: string | null;
    query?: Record<string, string | number | boolean | null | undefined>;
    body?: unknown;
  } = {},
): Promise<T> {
  const url = new URL(path.replace(/^\//, ''), API_BASE_URL.replace(/\/$/, '') + '/');
  if (options.query) {
    for (const [k, v] of Object.entries(options.query)) {
      if (v === null || typeof v === 'undefined' || v === '') continue;
      url.searchParams.set(k, String(v));
    }
  }

  const headers: Record<string, string> = {
    Accept: 'application/json',
  };
  if (options.token) {
    headers.Authorization = `Bearer ${options.token}`;
  }

  let body: string | undefined;
  if (typeof options.body !== 'undefined') {
    headers['Content-Type'] = 'application/json';
    body = JSON.stringify(options.body);
  }

  const res = await fetch(url.toString(), {
    method: options.method ?? 'GET',
    headers,
    body,
  });

  if (!res.ok) {
    const { message, details } = await readErrorMessage(res);
    throw new ApiError(message, res.status, details);
  }

  if (res.status === 204) {
    return undefined as T;
  }

  return (await res.json()) as T;
}
