import { User } from '@app/users/entities/user.entity';
import { UsersController } from '@app/users/users.controller';
import { UsersService } from '@app/users/users.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
