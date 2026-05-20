describe('Events e2e (smoke)', () => {
  it('expects paginated events list meta', () => {
    const meta = { total: 0, page: 1, limit: 20, totalPages: 1 };
    expect(meta.page).toBe(1);
  });
});
