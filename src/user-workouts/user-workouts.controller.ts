import { UserWorkoutsService } from '@app/user-workouts/user-workouts.service';
import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('UserWorkouts')
@Controller('user-workouts')
export class UserWorkoutsController {
  constructor(private readonly userWorkoutsService: UserWorkoutsService) {}
}
