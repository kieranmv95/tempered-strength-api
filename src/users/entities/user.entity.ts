import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true, id: true })
export class User {
  @Prop({ required: true, unique: true })
  username: string;

  @Prop({ required: true, default: true })
  onboarding: boolean;

  @Prop({ required: false })
  weight?: number;
}

export type UserDocument = User & Document;
export const UserSchema = SchemaFactory.createForClass(User);
