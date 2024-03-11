import {
  Exercise,
  ExerciseDocument,
} from '@app/exercises/entities/exercise.entity';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ExercisesService {
  constructor(
    @InjectModel(Exercise.name) private exerciseModel: Model<ExerciseDocument>,
  ) {}

  async findAll(): Promise<Exercise[]> {
    return this.exerciseModel.find();
  }
}
