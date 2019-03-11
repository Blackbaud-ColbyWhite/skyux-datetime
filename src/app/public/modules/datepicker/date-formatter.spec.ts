import { SkyDateFormatter } from './date-formatter';

describe('DateFormatter', () => {
  let formatter: SkyDateFormatter;

  beforeEach(() => {
    formatter = new SkyDateFormatter();
  });

  it('should consider undefined as invalid', () => {
    const date: Date = undefined;
    expect(formatter.dateIsValid(date)).toBe(false);
  });

  it('should consider dates with NaN values as invalid', () => {
    const date: Date = new Date(NaN);
    expect(formatter.dateIsValid(date)).toBe(false);
  });

  it('should consider dates as valid', () => {
    const date: Date = new Date();
    expect(formatter.dateIsValid(date)).toBe(true);
  });
});
