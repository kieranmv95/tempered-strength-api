import { UserWorkout } from '@app/user-workouts/entities/user-workout.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserWorkoutsController } from './user-workouts.controller';
import { UserWorkoutsService } from './user-workouts.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserWorkout])],
  controllers: [UserWorkoutsController],
  providers: [UserWorkoutsService],
})
export class UserWorkoutsModule {}
