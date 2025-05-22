import { Trend } from "../enums/trend";

export interface AnalysisResult {
    start: number;
    end: number;
    change: number;
    trend: Trend;
}