import { AllExceptionsFilter } from '@app/all-exceptions.filter';
import configuration, {
  CacheConfig,
  DbConfig,
  StripeConfig,
  cache_config,
  db_config,
} from '@app/app.config';
import { ExercisesModule } from '@app/exercises/exercises.module';
import { AppLoggerMiddleware } from '@app/middlewares/app-logger.middleware';
import { CacheModule } from '@nestjs/cache-manager';
import {
  MiddlewareConsumer,
  Module,
  UnprocessableEntityException,
  ValidationError,
  ValidationPipe,
} from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { APP_FILTER, APP_GUARD, APP_PIPE } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env', '.env.local'],
      load: [configuration],
    }),
    CacheModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        const cacheConfig = configService.get<CacheConfig>(cache_config);
        return {
          ttl: Number(cacheConfig.ttl) || 60 * 1000, // Milliseconds
          max: Number(cacheConfig.maxItems) || 100,
        };
      },
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const dbConfig = configService.get<DbConfig>(db_config);
        return {
          type: 'mysql',
          host: dbConfig.host,
          username: dbConfig.username,
          password: dbConfig.password,
          database: dbConfig.database,
          synchronize: true,
          autoLoadEntities: true,
          entities: [__dirname + '/**/*.entity{.ts,.js}'],
          extra: {
            ssl: {
              rejectUnauthorized: false,
            },
          },
        };
      },
    }),
    ExercisesModule,
  ],
  providers: [
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({
        transform: true,
        exceptionFactory: errors => {
          const formattedErrors = formatErrors(errors);
          return new UnprocessableEntityException(formattedErrors);
        },
      }),
    },
    {
      provide: APP_FILTER,
      useValue: new AllExceptionsFilter(),
    },
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(AppLoggerMiddleware).forRoutes('*');
  }
}

const formatErrors = (errors: ValidationError[], parentName = '') => {
  const formattedErrors = [];

  for (const error of errors) {
    if (Array.isArray(error.value) && !error.constraints) {
      formattedErrors.push(formatErrors(error.children, error.property));
    } else if (Array.isArray(error.children) && error.children.length) {
      const ob = { name: `${parentName}.${error.property}`, errors: [] };
      ob.errors = formatErrors(error.children);
      formattedErrors.push(ob);
    } else {
      const err = {};
      err[error.property] = Object.keys(error.constraints).map(
        p => error.constraints[p],
      );
      formattedErrors.push(err);
    }
  }

  return formattedErrors.flat();
};
