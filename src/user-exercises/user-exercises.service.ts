import { CreateUserExerciseDto } from '@app/user-exercises/dtos/create-user-exercise.dto';
import { UpdateUserExerciseDto } from '@app/user-exercises/dtos/update-user-exercise.dto';
import {
  UserExercise,
  UserExerciseDocument,
} from '@app/user-exercises/entities/user-exercise.entity';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UserExercisesService {
  constructor(
    @InjectModel(UserExercise.name)
    private readonly userExerciseModel: Model<UserExerciseDocument>,
  ) {}

  async findAll(): Promise<UserExercise[]> {
    return this.userExerciseModel.find();
  }

  async getAllUserExercises(userId: string): Promise<UserExercise[]> {
    return this.userExerciseModel.findOne({ userId });
  }

  updateUserExercise(
    userId: string,
    id: string,
    userExercise: UpdateUserExerciseDto,
  ) {
    return this.userExerciseModel.updateOne(
      { _id: id, userId },
      { ...userExercise },
    );
  }

  async deleteUserExercise(userId: string, id: string) {
    return this.userExerciseModel.deleteOne({ _id: id, userId });
  }

  async createUserExercise(
    userExercise: CreateUserExerciseDto,
  ): Promise<UserExercise> {
    return this.userExerciseModel.create(userExercise);
  }
}
