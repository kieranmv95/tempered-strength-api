import { UserTeamsService } from '@app/user-teams/user-teams.service';
import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('UserTeams')
@Controller('user-teams')
export class UserTeamsController {
  constructor(private readonly userTeamsService: UserTeamsService) {}
}
