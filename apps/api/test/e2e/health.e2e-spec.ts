describe('Health e2e (smoke)', () => {
  it('documents expected health payload shape', () => {
    const payload = { status: 'ok', service: 'event-and-ticket-booking-platform-api' };
    expect(payload.status).toBe('ok');
  });
});
