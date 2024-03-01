import { LocalUser } from '@app/auth/dto/local-user';
import { UsersService } from '@app/users/users.service';
import { Controller, Get, Request } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async getUser(@Request() { user: { id } }: { user: LocalUser }) {
    return this.usersService.getById(id);
  }

  @Get(':id')
  async getUserById(id: string) {
    return this.usersService.getById(id);
  }

  @Get('all')
  async getAllUsers() {
    return this.usersService.findAll();
  }
}
