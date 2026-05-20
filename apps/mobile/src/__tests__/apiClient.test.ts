import { apiClient } from '../services/apiClient';

describe('apiClient', () => {
  it('is configured', () => {
    expect(apiClient.defaults.timeout).toBe(15000);
  });
});
