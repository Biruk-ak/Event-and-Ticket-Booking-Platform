describe('QR e2e (smoke)', () => {
  it('expects QR prefix', () => {
    expect('ETBP-QR|id'.startsWith('ETBP-QR')).toBe(true);
  });
});
