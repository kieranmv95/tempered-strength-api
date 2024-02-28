import configuration from '@app/app.config';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { WebhooksModule } from './webhooks/webhooks.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env', '.env.local'],
      load: [configuration],
    }),
    WebhooksModule,
  ],
})
export class AppModule {}
