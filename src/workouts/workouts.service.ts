import {
  Workout,
  WorkoutDocument,
} from '@app/workouts/entities/workout.entity';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class WorkoutsService {
  constructor(
    @InjectModel(Workout.name)
    private readonly workoutModel: Model<WorkoutDocument>,
  ) {}

  async findAll(): Promise<Workout[]> {
    return this.workoutModel.find();
  }
}
