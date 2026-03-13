import { ScanQrDto } from './dto/scan-qr.dto';
import { QrService } from './qr.service';
export declare class QrController {
    private readonly qr;
    constructor(qr: QrService);
    scan(dto: ScanQrDto): Promise<{
        student: {
            id: string;
            isActive: boolean;
            fullName: string;
            phone: string | null;
        };
    }>;
}
