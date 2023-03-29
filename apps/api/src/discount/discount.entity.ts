import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Index,
} from 'typeorm';

@Entity('discounts')
export class Discount {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', nullable: true })\n  code: string;
  @Column({ type: 'varchar', nullable: true })\n  eventId: string;
  @Column({ type: 'int', default: 0 })\n  percentOff: number;
  @Column({ type: 'int', default: 0 })\n  amountOffCents: number;
  @Column({ type: 'int', default: 0 })\n  maxRedemptions: number;
  @Column({ type: 'int', default: 0 })\n  redemptionCount: number;
  @Column({ type: 'timestamptz', nullable: true })\n  startsAt: Date;
  @Column({ type: 'timestamptz', nullable: true })\n  endsAt: Date;
  @Column({ type: 'boolean', default: false })\n  isActive: boolean;

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt: Date;

  toPublic() {
    return {
      id: this.id,
      code: this.code,
      eventId: this.eventId,
      percentOff: this.percentOff,
      amountOffCents: this.amountOffCents,
      maxRedemptions: this.maxRedemptions,
      redemptionCount: this.redemptionCount,
      startsAt: this.startsAt,
      endsAt: this.endsAt,
      isActive: this.isActive,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}
