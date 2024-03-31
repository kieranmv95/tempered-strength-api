import { UserTeam } from '@app/user-teams/entities/user-team.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserTeamsController } from './user-teams.controller';
import { UserTeamsService } from './user-teams.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserTeam])],
  controllers: [UserTeamsController],
  providers: [UserTeamsService],
})
export class UserTeamsModule {}
