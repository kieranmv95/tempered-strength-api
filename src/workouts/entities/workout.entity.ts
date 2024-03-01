import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'workouts' })
export class Workout {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ type: 'varchar', length: 255, nullable: true })
  description?: string;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar', length: 255, name: 'logging_type' })
  loggingType: string;

  @Column({ type: 'varchar', length: 255, name: 'workout_type' })
  workoutType: string;
}
