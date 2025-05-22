import { Controller, Get } from '@nestjs/common';
import { BinanceService } from './binance.service';
import { AnalyzerService } from './analyzer.service';
import { AnalysisResult } from './interfaces/analysisResult';

@Controller('analyzer')
export class AnalyzerController {
    constructor(
        private readonly binance: BinanceService,
        private readonly analyzer: AnalyzerService
    ) {}

    @Get()
    async analyze(): Promise<AnalysisResult | { message: string}> {
        const data = await this.binance.fetchKlines();
        const result = this.analyzer.analyze(data)

        if (!result) return { message: 'No data'};

        return result
    }
}
