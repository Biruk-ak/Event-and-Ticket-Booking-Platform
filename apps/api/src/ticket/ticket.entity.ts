import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Index,
} from 'typeorm';

@Entity('tickets')
export class Ticket {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', nullable: true })\n  eventId: string;
  @Column({ type: 'varchar', nullable: true })\n  ticketTypeId: string;
  @Column({ type: 'varchar', nullable: true })\n  buyerId: string;
  @Column({ type: 'varchar', nullable: true })\n  orderId: string;
  @Column({ type: 'varchar', nullable: true })\n  status: string;
  @Column({ type: 'varchar', nullable: true })\n  qrPayload: string;
  @Column({ type: 'varchar', nullable: true })\n  seatLabel: string;
  @Column({ type: 'int', default: 0 })\n  priceCents: number;
  @Column({ type: 'varchar', nullable: true })\n  currency: string;
  @Column({ type: 'timestamptz', nullable: true })\n  purchasedAt: Date;
  @Column({ type: 'timestamptz', nullable: true })\n  checkedInAt: Date;

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt: Date;

  toPublic() {
    return {
      id: this.id,
      eventId: this.eventId,
      ticketTypeId: this.ticketTypeId,
      buyerId: this.buyerId,
      orderId: this.orderId,
      status: this.status,
      qrPayload: this.qrPayload,
      seatLabel: this.seatLabel,
      priceCents: this.priceCents,
      currency: this.currency,
      purchasedAt: this.purchasedAt,
      checkedInAt: this.checkedInAt,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}
