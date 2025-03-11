import { Test } from '@nestjs/testing';
import { ReportGenerator } from './report.generator';
import { ReportService } from './report.service';

describe('ReportGenerator', () => {
  it('generates report file url', async () => {
    const reports = {
      create: jest.fn(async (d) => ({ id: 'r1', ...d })),
      update: jest.fn(async (id, d) => ({ id, ...d })),
    };
    const module = await Test.createTestingModule({
      providers: [ReportGenerator, { provide: ReportService, useValue: reports }],
    }).compile();
    const gen = module.get(ReportGenerator);
    const result = await gen.enqueue('u1', 'e1', 'sales', 'csv');
    expect(result.status).toBe('ready');
    expect(result.fileUrl).toContain('r1.csv');
  });
});
