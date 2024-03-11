import {
  UserWorkout,
  UserWorkoutSchema,
} from '@app/user-workouts/entities/user-workout.entity';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserWorkoutsController } from './user-workouts.controller';
import { UserWorkoutsService } from './user-workouts.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: UserWorkout.name, schema: UserWorkoutSchema },
    ]),
  ],
  controllers: [UserWorkoutsController],
  providers: [UserWorkoutsService],
})
export class UserWorkoutsModule {}
