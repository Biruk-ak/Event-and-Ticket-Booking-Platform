import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Index,
} from 'typeorm';

@Entity('calendars')
export class Calendar {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', nullable: true })
  userId: string;
  @Column({ type: 'varchar', nullable: true })
  eventId: string;
  @Column({ type: 'varchar', nullable: true })
  title: string;
  @Column({ type: 'timestamptz', nullable: true })
  startsAt: Date;
  @Column({ type: 'timestamptz', nullable: true })
  endsAt: Date;
  @Column({ type: 'timestamptz', nullable: true })
  remindAt: Date;
  @Column({ type: 'varchar', nullable: true })
  source: string;

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt: Date;

  toPublic() {
    return {
      id: this.id,
      userId: this.userId,
      eventId: this.eventId,
      title: this.title,
      startsAt: this.startsAt,
      endsAt: this.endsAt,
      remindAt: this.remindAt,
      source: this.source,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}
