import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true, id: true })
export class Workout {
  @Prop()
  description?: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  loggingType: string;

  @Prop({ required: true })
  workoutType: string;
}

export type WorkoutDocument = Workout & Document;
export const WorkoutSchema = SchemaFactory.createForClass(Workout);
