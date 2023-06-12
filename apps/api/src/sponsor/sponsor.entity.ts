import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Index,
} from 'typeorm';

@Entity('sponsors')
export class Sponsor {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', nullable: true })\n  eventId: string;
  @Column({ type: 'varchar', nullable: true })\n  name: string;
  @Column({ type: 'varchar', nullable: true })\n  tier: string;
  @Column({ type: 'varchar', nullable: true })\n  logoUrl: string;
  @Column({ type: 'varchar', nullable: true })\n  websiteUrl: string;
  @Column({ type: 'int', default: 0 })\n  contributionCents: number;
  @Column({ type: 'boolean', default: false })\n  isActive: boolean;

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt: Date;

  toPublic() {
    return {
      id: this.id,
      eventId: this.eventId,
      name: this.name,
      tier: this.tier,
      logoUrl: this.logoUrl,
      websiteUrl: this.websiteUrl,
      contributionCents: this.contributionCents,
      isActive: this.isActive,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}
