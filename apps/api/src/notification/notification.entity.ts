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

  @Column({ type: 'varchar', nullable: true })
  userId: string;
  @Column({ type: 'varchar', nullable: true })
  channel: string;
  @Column({ type: 'varchar', nullable: true })
  title: string;
  @Column({ type: 'varchar', nullable: true })
  body: string;
  @Column({ type: 'varchar', nullable: true })
  payloadJson: string;
  @Column({ type: 'varchar', nullable: true })
  status: string;
  @Column({ type: 'timestamptz', nullable: true })
  sentAt: Date;
  @Column({ type: 'timestamptz', nullable: true })
  readAt: Date;

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
