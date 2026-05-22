import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Index,
} from 'typeorm';

@Entity('analyticss')
export class Analytics {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', nullable: true })
  eventId: string;
  @Column({ type: 'varchar', nullable: true })
  metric: string;
  @Column({ type: 'int', default: 0 })
  value: number;
  @Column({ type: 'varchar', nullable: true })
  dimensionsJson: string;
  @Column({ type: 'timestamptz', nullable: true })
  capturedAt: Date;

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt: Date;

  toPublic() {
    return {
      id: this.id,
      eventId: this.eventId,
      metric: this.metric,
      value: this.value,
      dimensionsJson: this.dimensionsJson,
      capturedAt: this.capturedAt,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}
