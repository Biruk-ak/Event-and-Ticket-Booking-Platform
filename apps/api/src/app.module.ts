import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HealthController } from './health/health.controller';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { EventModule } from './event/event.module';
import { TicketModule } from './ticket/ticket.module';
import { OrderModule } from './order/order.module';
import { QrModule } from './qr/qr.module';
import { VenueModule } from './venue/venue.module';
import { CategoryModule } from './category/category.module';
import { RefundModule } from './refund/refund.module';
import { DiscountModule } from './discount/discount.module';
import { SponsorModule } from './sponsor/sponsor.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: Number(process.env.DB_PORT || 5432),
      username: process.env.DB_USER || 'etbp',
      password: process.env.DB_PASSWORD || 'etbp',
      database: process.env.DB_NAME || 'etbp',
      autoLoadEntities: true,
      synchronize: process.env.NODE_ENV !== 'production',
    }),
    UserModule,
    AuthModule,
    EventModule,
    TicketModule,
    OrderModule,
    QrModule,
    VenueModule,
    CategoryModule,
    RefundModule,
    DiscountModule,
    SponsorModule,
  ],
  controllers: [HealthController],
})
export class AppModule {}
