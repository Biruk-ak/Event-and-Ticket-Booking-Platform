import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Index,
} from 'typeorm';

@Entity('venues')
export class Venue {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', nullable: true })\n  name: string;
  @Column({ type: 'varchar', nullable: true })\n  address: string;
  @Column({ type: 'varchar', nullable: true })\n  city: string;
  @Column({ type: 'varchar', nullable: true })\n  country: string;
  @Column({ type: 'int', default: 0 })\n  capacity: number;
  @Column({ type: 'int', default: 0 })\n  latitude: number;
  @Column({ type: 'int', default: 0 })\n  longitude: number;

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt: Date;

  toPublic() {
    return {
      id: this.id,
      name: this.name,
      address: this.address,
      city: this.city,
      country: this.country,
      capacity: this.capacity,
      latitude: this.latitude,
      longitude: this.longitude,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}
