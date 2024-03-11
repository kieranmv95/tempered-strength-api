import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true, id: true })
export class UserTeam {
  @Prop({ required: true })
  userId: string;

  @Prop({ required: true })
  teamIds: string[];
}

export type UserTeamDocument = UserTeam & Document;
export const UserTeamSchema = SchemaFactory.createForClass(UserTeam);
