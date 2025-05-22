/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import axios from "axios";

@Injectable()
export class BinanceService {
    constructor(private config: ConfigService) {}

    async fetchKlines(): Promise<any[]> {
        const base = this.config.get<string>('BINANCE_API_BASE');
        const interval = this.config.get<string>('INTERVAL');
        const symbol = this.config.get<string>('Symbol');
        const startTime = this.config.get<string>('START_TIME');
        const endTime = this.config.get<string>('END_TIME');

        const res = await axios.get<any[]>(`${base}/api/v3/klines`, {
            params: {
                interval,
                symbol,
                // startTime,
                // endTime
            }
        })

        return res.data.map((kline: any) => ({
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            time: kline[0],
            open: parseFloat(kline[1]),
            close: parseFloat(kline[4])
        }));
    }
}