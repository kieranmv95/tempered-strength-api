import { LocalUser } from '@app/auth/dto/local-user';
import { CreateUserExerciseDto } from '@app/user-exercises/dtos/create-user-exercise.dto';
import { UpdateUserExerciseDto } from '@app/user-exercises/dtos/update-user-exercise.dto';
import { UserExercise } from '@app/user-exercises/entities/user-exercise.entity';
import { UserExercisesService } from '@app/user-exercises/user-exercises.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Request,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('UserExercises')
@Controller('user-exercises')
export class UserExercisesController {
  constructor(private readonly userExercisesService: UserExercisesService) {}

  @Get()
  async getUserExercises(
    @Request() { user: { id: userId } }: { user: LocalUser },
  ): Promise<UserExercise[]> {
    return this.userExercisesService.getAllUserExercises(userId);
  }

  @Post()
  async createUserExercise(
    @Request() { user: { id: userId } }: { user: LocalUser },
    @Body() userExercise: CreateUserExerciseDto,
  ): Promise<UserExercise> {
    return this.userExercisesService.createUserExercise({
      ...userExercise,
      userId,
    });
  }

  @Patch(':id')
  async updateUserExercise(
    @Request() { user: { id: userId } }: { user: LocalUser },
    @Param('id') id: string,
    @Body() userExercise: UpdateUserExerciseDto,
  ) {
    return this.userExercisesService.updateUserExercise(
      userId,
      id,
      userExercise,
    );
  }

  @Delete(':id')
  async deleteUserExercise(
    @Request() { user: { id: userId } }: { user: LocalUser },
    @Param('id') id: string,
  ) {
    return this.userExercisesService.deleteUserExercise(userId, id);
  }
}
