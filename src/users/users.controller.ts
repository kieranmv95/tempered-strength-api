import { AllowAnonymous } from '@app/auth/decorators/allow-anonymous.decorator';
import { UsersService } from '@app/users/users.service';
import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@AllowAnonymous()
@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll() {
    return this.usersService.findAll();
  }
}
