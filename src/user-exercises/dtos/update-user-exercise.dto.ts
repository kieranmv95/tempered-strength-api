import { CreateUserExerciseDto } from '@app/user-exercises/dtos/create-user-exercise.dto';
import { PartialType } from '@nestjs/swagger';

export class UpdateUserExerciseDto extends PartialType(CreateUserExerciseDto) {}
