import { Controller } from '@nestjs/common';
import { UserWorkoutsService } from './user-workouts.service';

@Controller('user-workouts')
export class UserWorkoutsController {
  constructor(private readonly userWorkoutsService: UserWorkoutsService) {}
}
