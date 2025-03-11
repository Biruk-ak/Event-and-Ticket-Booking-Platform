import { Injectable, Logger } from '@nestjs/common';
import { ReportService } from './report.service';

@Injectable()
export class ReportGenerator {
  private readonly logger = new Logger(ReportGenerator.name);

  constructor(private readonly reports: ReportService) {}

  async enqueue(ownerId: string, eventId: string, type: string, format: 'csv' | 'pdf' = 'csv') {
    const report = await this.reports.create({
      ownerId,
      eventId,
      type,
      format,
      status: 'processing',
    } as any);
    const fileUrl = `/exports/${report.id}.${format}`;
    const done = await this.reports.update(report.id, {
      status: 'ready',
      fileUrl,
      generatedAt: new Date(),
    } as any);
    this.logger.log(`Report ready ${report.id}`);
    return done;
  }
}
