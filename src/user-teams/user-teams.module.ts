import {
  UserTeam,
  UserTeamSchema,
} from '@app/user-teams/entities/user-team.entity';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserTeamsController } from './user-teams.controller';
import { UserTeamsService } from './user-teams.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: UserTeam.name, schema: UserTeamSchema },
    ]),
  ],
  controllers: [UserTeamsController],
  providers: [UserTeamsService],
})
export class UserTeamsModule {}
