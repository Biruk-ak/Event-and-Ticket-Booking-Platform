import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Index,
} from 'typeorm';

@Entity('messages')
export class Message {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', nullable: true })\n  threadId: string;
  @Column({ type: 'varchar', nullable: true })\n  senderId: string;
  @Column({ type: 'varchar', nullable: true })\n  recipientId: string;
  @Column({ type: 'varchar', nullable: true })\n  eventId: string;
  @Column({ type: 'varchar', nullable: true })\n  body: string;
  @Column({ type: 'boolean', default: false })\n  isRead: boolean;
  @Column({ type: 'timestamptz', nullable: true })\n  sentAt: Date;

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt: Date;

  toPublic() {
    return {
      id: this.id,
      threadId: this.threadId,
      senderId: this.senderId,
      recipientId: this.recipientId,
      eventId: this.eventId,
      body: this.body,
      isRead: this.isRead,
      sentAt: this.sentAt,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}
