import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryColumn({ type: 'varchar', length: 255 })
  id: string;

  @Column({ type: 'varchar', length: 255, unique: true })
  username: string;

  @Column({ type: 'tinyint', width: 1 })
  onboarding: boolean;

  @Column({ type: 'decimal', precision: 5, scale: 1, nullable: true })
  weight?: number;
}
