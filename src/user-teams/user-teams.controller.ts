import { Controller } from '@nestjs/common';
import { UserTeamsService } from './user-teams.service';

@Controller('user-teams')
export class UserTeamsController {
  constructor(private readonly userTeamsService: UserTeamsService) {}
}
