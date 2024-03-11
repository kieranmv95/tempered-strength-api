import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true, id: true })
export class UserWorkout {
  @Prop({ required: true })
  userId: string;

  @Prop({ required: true })
  workoutId: string;

  @Prop()
  log?: number;
}

export type UserWorkoutDocument = UserWorkout & Document;
export const UserWorkoutSchema = SchemaFactory.createForClass(UserWorkout);
