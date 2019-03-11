import { SkyDateFormatter } from './date-formatter';

describe('DateFormatter', () => {
  let formatter: SkyDateFormatter;

  beforeEach(() => {
    formatter = new SkyDateFormatter();
  });

  describe('.dateIsValid', () => {
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

  describe('.getDateFromUnknownString', () => {
    it('should return valid Date for common strings', () => {
      const dateString = '2019/02/02';
      const expectedDate = new Date(dateString);
      const returnedDate: Date = formatter.getDateFromUnknownString(dateString);
      expect(returnedDate.valueOf()).toBe(expectedDate.valueOf());
    });

    it('should return a NaN Date for invalid strings', () => {
      const dateString = 'What do you call a woman who throws her loan papers in the fire? Bernadette';
      const returnedDate: Date = formatter.getDateFromUnknownString(dateString);
      expect(returnedDate.valueOf()).toEqual(NaN);
    });
  });
});
