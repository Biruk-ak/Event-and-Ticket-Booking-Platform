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

  @Column({ type: 'varchar', nullable: true })
  code: string;
  @Column({ type: 'varchar', nullable: true })
  eventId: string;
  @Column({ type: 'int', default: 0 })
  percentOff: number;
  @Column({ type: 'int', default: 0 })
  amountOffCents: number;
  @Column({ type: 'int', default: 0 })
  maxRedemptions: number;
  @Column({ type: 'int', default: 0 })
  redemptionCount: number;
  @Column({ type: 'timestamptz', nullable: true })
  startsAt: Date;
  @Column({ type: 'timestamptz', nullable: true })
  endsAt: Date;
  @Column({ type: 'boolean', default: false })
  isActive: boolean;

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
