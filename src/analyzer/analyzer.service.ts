/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Injectable } from '@nestjs/common';

@Injectable()
export class AnalyzerService {
    analyze(data) {
        if(!data.length) return null;

        const start = data[0].open;
        const end = data[data.length - 1].close;

        const change = ((end - start) / start) * 100

        return {
            start,
            end,
            change,
            trend: (change > 0) ?
                'increases' : (change < 0) ?
                'decreases' : 'no change',
        }
    }
}
