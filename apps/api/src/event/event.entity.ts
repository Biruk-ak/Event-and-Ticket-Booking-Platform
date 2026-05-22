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

  @Column({ type: 'varchar', nullable: true })
  organizerId: string;
  @Column({ type: 'varchar', nullable: true })
  title: string;
  @Column({ type: 'varchar', nullable: true })
  slug: string;
  @Column({ type: 'varchar', nullable: true })
  description: string;
  @Column({ type: 'varchar', nullable: true })
  status: string;
  @Column({ type: 'timestamptz', nullable: true })
  startsAt: Date;
  @Column({ type: 'timestamptz', nullable: true })
  endsAt: Date;
  @Column({ type: 'varchar', nullable: true })
  timezone: string;
  @Column({ type: 'varchar', nullable: true })
  venueName: string;
  @Column({ type: 'varchar', nullable: true })
  venueAddress: string;
  @Column({ type: 'varchar', nullable: true })
  venueCity: string;
  @Column({ type: 'varchar', nullable: true })
  coverImageUrl: string;
  @Column({ type: 'boolean', default: false })
  isFeatured: boolean;
  @Column({ type: 'int', default: 0 })
  capacity: number;

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
