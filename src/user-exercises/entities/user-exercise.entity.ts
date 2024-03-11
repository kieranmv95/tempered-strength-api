import { Exercise } from '@app/exercises/entities/exercise.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true, id: true })
export class UserExercise {
  @Prop({ required: true })
  userId: string;

  @Prop({ required: true })
  exercise: Exercise;

  @Prop()
  log?: number;

  @Prop()
  duration?: number;
}

export type UserExerciseDocument = UserExercise & Document;
export const UserExerciseSchema = SchemaFactory.createForClass(UserExercise);
