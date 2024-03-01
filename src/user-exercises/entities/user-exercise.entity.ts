import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'userExercises' })
export class UserExercise {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ type: 'varchar', length: 255 })
  userId: string;

  @Column({ type: 'decimal', precision: 5, scale: 2, nullable: true })
  log?: number;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  date: Date;

  @Column({ type: 'varchar', length: 255, nullable: true })
  duration?: string;
}
