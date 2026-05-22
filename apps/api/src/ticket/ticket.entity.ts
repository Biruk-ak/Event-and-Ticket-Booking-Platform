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

  @Column({ type: 'varchar', nullable: true })
  eventId: string;
  @Column({ type: 'varchar', nullable: true })
  ticketTypeId: string;
  @Column({ type: 'varchar', nullable: true })
  buyerId: string;
  @Column({ type: 'varchar', nullable: true })
  orderId: string;
  @Column({ type: 'varchar', nullable: true })
  status: string;
  @Column({ type: 'varchar', nullable: true })
  qrPayload: string;
  @Column({ type: 'varchar', nullable: true })
  seatLabel: string;
  @Column({ type: 'int', default: 0 })
  priceCents: number;
  @Column({ type: 'varchar', nullable: true })
  currency: string;
  @Column({ type: 'timestamptz', nullable: true })
  purchasedAt: Date;
  @Column({ type: 'timestamptz', nullable: true })
  checkedInAt: Date;

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
