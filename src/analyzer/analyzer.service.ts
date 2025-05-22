/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Injectable } from '@nestjs/common';
import { AnalysisResult } from './interfaces/analysisResult';
import { Trend } from './enums/trend';

@Injectable()
export class AnalyzerService {
    analyze(data): AnalysisResult | null {
        if(!data.length) return null;

        const start = data[0].open;
        const end = data[data.length - 1].close;

        const change = ((end - start) / start) * 100

        return {
            start,
            end,
            change,
            trend: (change > 0) ?
                Trend.Increase : (change < 0) ?
                Trend.Decrease : Trend.NoChange,
        }
    }
}
