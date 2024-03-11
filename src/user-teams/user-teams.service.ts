import {
  UserTeam,
  UserTeamDocument,
} from '@app/user-teams/entities/user-team.entity';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UserTeamsService {
  constructor(
    @InjectModel(UserTeam.name) private userTeamModel: Model<UserTeamDocument>,
  ) {}

  async findAll(): Promise<UserTeam[]> {
    return this.userTeamModel.find();
  }
}
