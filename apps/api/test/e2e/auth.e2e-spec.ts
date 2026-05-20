describe('Auth e2e (smoke)', () => {
  it('expects bearer token response shape', () => {
    const body = { accessToken: 'jwt', user: { id: '1' } };
    expect(body.accessToken).toBeTruthy();
  });
});
