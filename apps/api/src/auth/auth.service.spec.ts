import { Test } from '@nestjs/testing';
import { JwtService } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { UserService } from '../user/user.service';
import { UnauthorizedException } from '@nestjs/common';

describe('AuthService', () => {
  let service: AuthService;
  const users = {
    findAll: jest.fn(),
    create: jest.fn(),
    findOne: jest.fn(),
    update: jest.fn(),
  };
  const jwt = { signAsync: jest.fn(async () => 'token') };

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        AuthService,
        { provide: UserService, useValue: users },
        { provide: JwtService, useValue: jwt },
      ],
    }).compile();
    service = module.get(AuthService);
    jest.clearAllMocks();
  });

  it('registers a user and returns token', async () => {
    users.findAll.mockResolvedValue({ items: [], meta: { total: 0 } });
    users.create.mockResolvedValue({ id: '1', email: 'a@b.com', role: 'attendee', toPublic: () => ({ id: '1' }) });
    const result = await service.register({ email: 'a@b.com', password: 'password1', displayName: 'A' });
    expect(result.accessToken).toBe('token');
  });

  it('rejects invalid login', async () => {
    users.findAll.mockResolvedValue({ items: [] });
    await expect(service.login('x@y.com', 'bad')).rejects.toBeInstanceOf(UnauthorizedException);
  });
});
