import { ExercisesService } from '@app/exercises/exercises.service';
import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Exercise } from '@app/exercises/entities/exercise.entity';

@ApiTags('Exercises')
@Controller('exercises')
export class ExercisesController {
  constructor(private readonly exercisesService: ExercisesService) {}

  @Get()
  async getExercises(): Promise<Exercise[]> {
    return this.exercisesService.findAll();
  }
}
