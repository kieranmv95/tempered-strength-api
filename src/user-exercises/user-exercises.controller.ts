import { LocalUser } from '@app/auth/dto/local-user';
import { UserExercise } from '@app/user-exercises/entities/user-exercise.entity';
import { UserExercisesService } from '@app/user-exercises/user-exercises.service';
import { Controller, Get, Request } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('UserExercises')
@Controller('user-exercises')
export class UserExercisesController {
  constructor(private readonly userExercisesService: UserExercisesService) {}

  @Get()
  async getUserExercises(
    @Request() { user: { id } }: { user: LocalUser },
  ): Promise<UserExercise[]> {
    return this.userExercisesService.getAllUserExercises(id);
  }
}
