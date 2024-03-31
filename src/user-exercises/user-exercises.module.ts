import { UserExercise } from '@app/user-exercises/entities/user-exercise.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserExercisesController } from './user-exercises.controller';
import { UserExercisesService } from './user-exercises.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserExercise])],
  controllers: [UserExercisesController],
  providers: [UserExercisesService],
})
export class UserExercisesModule {}
