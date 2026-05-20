import { colors, spacing } from '../theme';

describe('mobile theme', () => {
  it('exposes accent color', () => {
    expect(colors.accent).toBeTruthy();
  });
  it('has spacing scale', () => {
    expect(spacing.lg).toBeGreaterThan(spacing.sm);
  });
});
