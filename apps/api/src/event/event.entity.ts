import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Index,
} from 'typeorm';

@Entity('events')
export class Event {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', nullable: true })\n  organizerId: string;
  @Column({ type: 'varchar', nullable: true })\n  title: string;
  @Column({ type: 'varchar', nullable: true })\n  slug: string;
  @Column({ type: 'varchar', nullable: true })\n  description: string;
  @Column({ type: 'varchar', nullable: true })\n  status: string;
  @Column({ type: 'timestamptz', nullable: true })\n  startsAt: Date;
  @Column({ type: 'timestamptz', nullable: true })\n  endsAt: Date;
  @Column({ type: 'varchar', nullable: true })\n  timezone: string;
  @Column({ type: 'varchar', nullable: true })\n  venueName: string;
  @Column({ type: 'varchar', nullable: true })\n  venueAddress: string;
  @Column({ type: 'varchar', nullable: true })\n  venueCity: string;
  @Column({ type: 'varchar', nullable: true })\n  coverImageUrl: string;
  @Column({ type: 'boolean', default: false })\n  isFeatured: boolean;
  @Column({ type: 'int', default: 0 })\n  capacity: number;

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt: Date;

  toPublic() {
    return {
      id: this.id,
      organizerId: this.organizerId,
      title: this.title,
      slug: this.slug,
      description: this.description,
      status: this.status,
      startsAt: this.startsAt,
      endsAt: this.endsAt,
      timezone: this.timezone,
      venueName: this.venueName,
      venueAddress: this.venueAddress,
      venueCity: this.venueCity,
      coverImageUrl: this.coverImageUrl,
      isFeatured: this.isFeatured,
      capacity: this.capacity,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}
