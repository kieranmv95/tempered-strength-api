import { JwtConfig, jwt_config } from '@app/app.config';
import { LocalUser } from '@app/auth/dto/local-user';
import { TokenPayload } from '@app/auth/dto/token-payload';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { passportJwtSecret } from 'jwks-rsa';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(configService: ConfigService) {
    const { clerkIssuerUrl } = configService.get<JwtConfig>(jwt_config);
    super({
      secretOrKeyProvider: passportJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: `${clerkIssuerUrl}/.well-known/jwks.json`,
      }),
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      issuer: clerkIssuerUrl,
      algorithms: ['RS256'],
    });
  }

  validate(payload: TokenPayload): LocalUser {
    return {
      id: payload.sub,
      username: payload.username,
    };
  }
}
