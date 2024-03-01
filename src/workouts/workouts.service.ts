import { Workout } from '@app/workouts/entities/workout.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class WorkoutsService {
  constructor(
    @InjectRepository(Workout)
    private readonly workoutsRepository: Repository<Workout>,
  ) {}

  async findAll(): Promise<Workout[]> {
    return this.workoutsRepository.find();
  }
}
