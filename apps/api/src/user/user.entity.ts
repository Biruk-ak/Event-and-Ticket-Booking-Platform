import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Index,
} from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', nullable: true })
  email: string;
  @Column({ type: 'varchar', nullable: true })
  passwordHash: string;
  @Column({ type: 'varchar', nullable: true })
  displayName: string;
  @Column({ type: 'varchar', nullable: true })
  role: string;
  @Column({ type: 'varchar', nullable: true })
  phone: string;
  @Column({ type: 'boolean', default: false })
  isVerified: boolean;
  @Column({ type: 'timestamptz', nullable: true })
  lastLoginAt: Date;

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt: Date;

  toPublic() {
    return {
      id: this.id,
      email: this.email,
      passwordHash: this.passwordHash,
      displayName: this.displayName,
      role: this.role,
      phone: this.phone,
      isVerified: this.isVerified,
      lastLoginAt: this.lastLoginAt,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}
