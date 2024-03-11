import {
  Exercise,
  ExerciseSchema,
} from '@app/exercises/entities/exercise.entity';
import { ExercisesController } from '@app/exercises/exercises.controller';
import { ExercisesService } from '@app/exercises/exercises.service';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Exercise.name, schema: ExerciseSchema },
    ]),
  ],
  controllers: [ExercisesController],
  providers: [ExercisesService],
})
export class ExercisesModule {}
