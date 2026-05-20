import { api } from '../lib/api';

describe('admin api', () => {
  it('creates axios instance', () => {
    expect(api).toBeDefined();
  });
});
