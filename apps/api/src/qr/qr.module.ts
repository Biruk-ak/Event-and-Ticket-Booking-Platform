import { Module } from '@nestjs/common';
import { TicketModule } from '../ticket/ticket.module';
import { QrService } from './qr.service';
import { QrController } from './qr.controller';

@Module({
  imports: [TicketModule],
  providers: [QrService],
  controllers: [QrController],
  exports: [QrService],
})
export class QrModule {}
