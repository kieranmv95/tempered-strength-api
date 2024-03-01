import { CreateUserExerciseDto } from '@app/user-exercises/dtos/create-user-exercise.dto';
import { UpdateUserExerciseDto } from '@app/user-exercises/dtos/update-user-exercise.dto';
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

  updateUserExercise(
    userId: string,
    id: number,
    userExercise: UpdateUserExerciseDto,
  ) {
    return this.userExercisesRepository.update(
      { id, userId },
      { ...userExercise },
    );
  }

  async deleteUserExercise(userId: string, id: number) {
    return this.userExercisesRepository.delete({ id, userId });
  }

  async createUserExercise(
    userExercise: CreateUserExerciseDto,
  ): Promise<UserExercise> {
    return this.userExercisesRepository.save(userExercise);
  }
}
