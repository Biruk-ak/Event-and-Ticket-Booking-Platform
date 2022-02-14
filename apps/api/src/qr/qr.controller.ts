import { Body, Controller, Post, Param, ParseUUIDPipe } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { QrService } from './qr.service';
import { IsString } from 'class-validator';

class VerifyQrDto {
  @IsString()
  payload: string;
}

@ApiTags('qr-tickets')
@Controller('qr')
export class QrController {
  constructor(private readonly qr: QrService) {}

  @Post('issue/:ticketId')
  @ApiOperation({ summary: 'Issue signed QR payload for a ticket' })
  issue(@Param('ticketId', ParseUUIDPipe) ticketId: string) {
    return this.qr.issueForTicket(ticketId);
  }

  @Post('verify')
  @ApiOperation({ summary: 'Verify QR ticket authenticity' })
  verify(@Body() dto: VerifyQrDto) {
    return this.qr.verify(dto.payload);
  }

  @Post('check-in')
  @ApiOperation({ summary: 'Check in attendee via QR ticket' })
  checkIn(@Body() dto: VerifyQrDto) {
    return this.qr.checkIn(dto.payload);
  }
}
