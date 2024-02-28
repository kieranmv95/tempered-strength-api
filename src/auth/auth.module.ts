import { AuthService } from '@app/auth/auth.service';
import { JwtStrategy } from '@app/auth/strategies/jwt.strategy';
import { Module } from '@nestjs/common';

@Module({
  providers: [AuthService, JwtStrategy],
})
export class AuthModule {}
