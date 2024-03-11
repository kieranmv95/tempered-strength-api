import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true, id: true })
export class Exercise {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  loggingType: string;

  @Prop({ required: true })
  isPublic: boolean;
}

export type ExerciseDocument = Exercise & Document;
export const ExerciseSchema = SchemaFactory.createForClass(Exercise);
