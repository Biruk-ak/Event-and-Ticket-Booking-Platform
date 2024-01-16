import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Index,
} from 'typeorm';

@Entity('notifications')
export class Notification {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', nullable: true })\n  userId: string;
  @Column({ type: 'varchar', nullable: true })\n  channel: string;
  @Column({ type: 'varchar', nullable: true })\n  title: string;
  @Column({ type: 'varchar', nullable: true })\n  body: string;
  @Column({ type: 'varchar', nullable: true })\n  payloadJson: string;
  @Column({ type: 'varchar', nullable: true })\n  status: string;
  @Column({ type: 'timestamptz', nullable: true })\n  sentAt: Date;
  @Column({ type: 'timestamptz', nullable: true })\n  readAt: Date;

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt: Date;

  toPublic() {
    return {
      id: this.id,
      userId: this.userId,
      channel: this.channel,
      title: this.title,
      body: this.body,
      payloadJson: this.payloadJson,
      status: this.status,
      sentAt: this.sentAt,
      readAt: this.readAt,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}
