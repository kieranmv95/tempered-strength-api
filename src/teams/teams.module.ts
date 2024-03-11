import { Team, TeamSchema } from '@app/teams/entities/team.entity';
import { TeamsController } from '@app/teams/teams.controller';
import { TeamsService } from '@app/teams/teams.service';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Team.name, schema: TeamSchema }]),
  ],
  controllers: [TeamsController],
  providers: [TeamsService],
})
export class TeamsModule {}
