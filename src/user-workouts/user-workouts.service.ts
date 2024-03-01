import { UserWorkout } from '@app/user-workouts/entities/user-workout.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserWorkoutsService {
  constructor(
    @InjectRepository(UserWorkout)
    private readonly userWorkoutsRepository: Repository<UserWorkout>,
  ) {}

  async findAll(): Promise<UserWorkout[]> {
    return this.userWorkoutsRepository.find();
  }
}
