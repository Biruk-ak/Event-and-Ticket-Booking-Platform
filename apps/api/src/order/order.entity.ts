import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Index,
} from 'typeorm';

@Entity('orders')
export class Order {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', nullable: true })\n  buyerId: string;
  @Column({ type: 'varchar', nullable: true })\n  eventId: string;
  @Column({ type: 'varchar', nullable: true })\n  status: string;
  @Column({ type: 'int', default: 0 })\n  totalCents: number;
  @Column({ type: 'varchar', nullable: true })\n  currency: string;
  @Column({ type: 'varchar', nullable: true })\n  discountCode: string;
  @Column({ type: 'timestamptz', nullable: true })\n  paidAt: Date;

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt: Date;

  toPublic() {
    return {
      id: this.id,
      buyerId: this.buyerId,
      eventId: this.eventId,
      status: this.status,
      totalCents: this.totalCents,
      currency: this.currency,
      discountCode: this.discountCode,
      paidAt: this.paidAt,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}
