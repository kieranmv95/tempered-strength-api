import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'userWorkouts' })
export class UserWorkout {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ type: 'varchar', length: 255 })
  userId: string;

  @Column({ type: 'varchar', length: 255 })
  workoutId: string;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  date: Date;

  @Column({ type: 'varchar', length: 255, nullable: true })
  log?: number;
}
