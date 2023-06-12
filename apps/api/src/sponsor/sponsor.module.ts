import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sponsor } from './sponsor.entity';
import { SponsorService } from './sponsor.service';
import { SponsorController } from './sponsor.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Sponsor])],
  controllers: [SponsorController],
  providers: [SponsorService],
  exports: [SponsorService],
})
export class SponsorModule {}
