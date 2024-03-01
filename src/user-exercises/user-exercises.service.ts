import { UserExercise } from '@app/user-exercises/entities/user-exercise.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserExercisesService {
  constructor(
    @InjectRepository(UserExercise)
    private readonly userExercisesRepository: Repository<UserExercise>,
  ) {}

  async findAll(): Promise<UserExercise[]> {
    return this.userExercisesRepository.find();
  }

  async getAllUserExercises(id: string): Promise<UserExercise[]> {
    return this.userExercisesRepository.find({ where: { userId: id } });
  }
}
