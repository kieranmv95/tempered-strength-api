import { UserTeam } from '@app/user-teams/entities/user-team.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserTeamsService {
  constructor(
    @InjectRepository(UserTeam)
    private readonly userTeamsRepository: Repository<UserTeam>,
  ) {}

  async findAll(): Promise<UserTeam[]> {
    return this.userTeamsRepository.find();
  }
}
