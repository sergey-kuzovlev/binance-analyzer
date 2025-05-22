import { Module } from '@nestjs/common';
import { AnalyzerController } from './analyzer.controller';
import { AnalyzerService } from './analyzer/analyzer.service';
import { BinanceService } from './binance.service';

@Module({
  controllers: [AnalyzerController],
  providers: [AnalyzerService, BinanceService]
})
export class AnalyzerModule {}
