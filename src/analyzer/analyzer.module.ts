import { Module } from '@nestjs/common';
import { AnalyzerController } from './analyzer.controller';
import { AnalyzerService } from './analyzer/analyzer.service';

@Module({
  controllers: [AnalyzerController],
  providers: [AnalyzerService]
})
export class AnalyzerModule {}
