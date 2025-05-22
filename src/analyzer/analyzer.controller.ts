import { Controller, Get } from '@nestjs/common';
import { BinanceService } from './binance.service';
import { AnalyzerService } from './analyzer.service';

@Controller('analyzer')
export class AnalyzerController {
    constructor(
        private readonly binance: BinanceService,
        private readonly analyzer: AnalyzerService
    ) {}

    @Get()
    async analyze(): Promise<any[] | any> {
        const data = await this.binance.fetchKlines();
        const result = this.analyzer.analyze(data)

        return result ?? { message: 'No data'};
    }
}
