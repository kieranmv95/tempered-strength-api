import { Team, TeamDocument } from '@app/teams/entities/team.entity';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class TeamsService {
  constructor(@InjectModel(Team.name) private teamModel: Model<TeamDocument>) {}

  async findAll(): Promise<Team[]> {
    return this.teamModel.find();
  }
}
