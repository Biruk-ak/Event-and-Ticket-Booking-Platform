import { api } from '../lib/api';

describe('organizer api', () => {
  it('creates axios instance', () => {
    expect(api).toBeDefined();
  });
});
