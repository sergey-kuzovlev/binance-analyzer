import { AnalyzerService } from './analyzer.service';
import { Trend } from './enums/trend';

describe('AnalyzerService', () => {
  let service: AnalyzerService;

  beforeEach(() => {
    service = new AnalyzerService();
  });

  it('should return null or empty', () => {
    const result = service.analyze([]);

    expect(result).toBeNull();
  })

  it('should detect increased price', () => {
    const result = service.analyze([
      { open: 100, close: 105 },
      { open: 105, close: 110 }
    ])

    expect(result?.trend).toBe(Trend.Increase)
  })

  it('should detect decreased price', () => {
    const result = service.analyze([
      { open: 150, close: 145 },
      { open: 145, close: 130 }
    ])

    expect(result?.trend).toBe(Trend.Decrease)
  })

  it('should detect no change', () => {
    const result = service.analyze([
      { open: 200, close: 200 },
      { open: 200, close: 200 }
    ])

    expect(result?.trend).toBe(Trend.NoChange)
  })
});
