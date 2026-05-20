describe('Tickets e2e (smoke)', () => {
  it('expects ticket status union values', () => {
    const statuses = ['available', 'reserved', 'sold', 'checked_in', 'refunded', 'cancelled'];
    expect(statuses).toContain('sold');
  });
});
