import { Controller } from '@nestjs/common';
import { UserExercisesService } from './user-exercises.service';

@Controller('user-exercises')
export class UserExercisesController {
  constructor(private readonly userExercisesService: UserExercisesService) {}
}
