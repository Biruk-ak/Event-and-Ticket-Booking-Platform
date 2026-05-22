import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Index,
} from 'typeorm';

@Entity('reports')
export class Report {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', nullable: true })
  ownerId: string;
  @Column({ type: 'varchar', nullable: true })
  eventId: string;
  @Column({ type: 'varchar', nullable: true })
  type: string;
  @Column({ type: 'varchar', nullable: true })
  format: string;
  @Column({ type: 'varchar', nullable: true })
  status: string;
  @Column({ type: 'varchar', nullable: true })
  fileUrl: string;
  @Column({ type: 'timestamptz', nullable: true })
  generatedAt: Date;

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt: Date;

  toPublic() {
    return {
      id: this.id,
      ownerId: this.ownerId,
      eventId: this.eventId,
      type: this.type,
      format: this.format,
      status: this.status,
      fileUrl: this.fileUrl,
      generatedAt: this.generatedAt,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}
