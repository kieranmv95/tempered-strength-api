import { logger } from '@app/logging';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger,
    rawBody: true,
    cors: true,
  });

  const appVersion = process.env.APP_VERSION ?? process.env.npm_package_version;
  const options = new DocumentBuilder()
    .setTitle('StudyHall API')
    .setDescription('StudyHall API')
    .setVersion(appVersion)
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, options);

  if (process.env.NODE_ENV?.toLowerCase() !== 'production') {
    SwaggerModule.setup('documentation', app, document);
    SwaggerModule.setup('/', app, document);
  }

  await app.listen(process.env.APP_PORT);
}
bootstrap();
