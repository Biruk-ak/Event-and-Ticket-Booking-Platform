import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Index,
} from 'typeorm';

@Entity('refunds')
export class Refund {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', nullable: true })
  orderId: string;
  @Column({ type: 'varchar', nullable: true })
  ticketId: string;
  @Column({ type: 'varchar', nullable: true })
  buyerId: string;
  @Column({ type: 'int', default: 0 })
  amountCents: number;
  @Column({ type: 'varchar', nullable: true })
  currency: string;
  @Column({ type: 'varchar', nullable: true })
  reason: string;
  @Column({ type: 'varchar', nullable: true })
  status: string;
  @Column({ type: 'timestamptz', nullable: true })
  processedAt: Date;

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt: Date;

  toPublic() {
    return {
      id: this.id,
      orderId: this.orderId,
      ticketId: this.ticketId,
      buyerId: this.buyerId,
      amountCents: this.amountCents,
      currency: this.currency,
      reason: this.reason,
      status: this.status,
      processedAt: this.processedAt,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}
