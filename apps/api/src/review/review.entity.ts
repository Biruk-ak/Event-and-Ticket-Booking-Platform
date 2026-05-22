import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Index,
} from 'typeorm';

@Entity('reviews')
export class Review {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', nullable: true })
  eventId: string;
  @Column({ type: 'varchar', nullable: true })
  authorId: string;
  @Column({ type: 'int', default: 0 })
  rating: number;
  @Column({ type: 'varchar', nullable: true })
  title: string;
  @Column({ type: 'varchar', nullable: true })
  body: string;
  @Column({ type: 'boolean', default: false })
  isPublished: boolean;
  @Column({ type: 'timestamptz', nullable: true })
  moderatedAt: Date;

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt: Date;

  toPublic() {
    return {
      id: this.id,
      eventId: this.eventId,
      authorId: this.authorId,
      rating: this.rating,
      title: this.title,
      body: this.body,
      isPublished: this.isPublished,
      moderatedAt: this.moderatedAt,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}
