import {
  UserWorkout,
  UserWorkoutDocument,
} from '@app/user-workouts/entities/user-workout.entity';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UserWorkoutsService {
  constructor(
    @InjectModel(UserWorkout.name)
    private readonly userWorkoutModel: Model<UserWorkoutDocument>,
  ) {}

  async findAll(): Promise<UserWorkout[]> {
    return this.userWorkoutModel.find();
  }
}
