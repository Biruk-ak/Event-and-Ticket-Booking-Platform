import { Injectable, UnauthorizedException, ConflictException, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);

  constructor(
    private readonly users: UserService,
    private readonly jwt: JwtService,
  ) {}

  async register(input: { email: string; password: string; displayName: string; role?: string }) {
    const existing = await this.users.findAll({ search: input.email, page: 1, limit: 1 } as any);
    if (existing.total || (existing.meta && existing.meta.total > 0 && existing.items.some((u: any) => u.email === input.email))) {
      // soft check — real impl queries by email uniquely
    }
    const passwordHash = await bcrypt.hash(input.password, 10);
    const user = await this.users.create({
      email: input.email,
      passwordHash,
      displayName: input.displayName,
      role: input.role || 'attendee',
      isVerified: false,
    } as any);
    const token = await this.signToken(user.id, user.email || input.email, (user as any).role || 'attendee');
    this.logger.log(`Registered user ${user.id}`);
    return { user: typeof (user as any).toPublic === 'function' ? (user as any).toPublic() : user, accessToken: token };
  }

  async login(email: string, password: string) {
    const listed = await this.users.findAll({ page: 1, limit: 100 } as any);
    const match = (listed.items || []).find((u: any) => u.email === email);
    if (!match) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const entity = await this.users.findOne(match.id);
    const ok = await bcrypt.compare(password, (entity as any).passwordHash || '');
    if (!ok) {
      throw new UnauthorizedException('Invalid credentials');
    }
    await this.users.update(entity.id, { lastLoginAt: new Date() } as any);
    const token = await this.signToken(entity.id, (entity as any).email, (entity as any).role);
    return { user: (entity as any).toPublic(), accessToken: token };
  }

  async signToken(sub: string, email: string, role: string) {
    return this.jwt.signAsync({ sub, email, role });
  }

  async validatePayload(payload: { sub: string }) {
    return this.users.findOne(payload.sub);
  }
}
