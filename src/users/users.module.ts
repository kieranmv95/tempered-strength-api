import { User, UserSchema } from '@app/users/entities/user.entity';
import { UsersController } from '@app/users/users.controller';
import { UsersService } from '@app/users/users.service';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
