import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AnalyzerModule } from './analyzer/analyzer.module';

@Module({
  imports: [ConfigModule.forRoot({isGlobal: true}), AnalyzerModule]
})
export class AppModule {}
