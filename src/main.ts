import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Activate global validation pipe
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Strip unrecognized properties from the request body
      forbidNonWhitelisted: true, // Throw an error if unrecognized properties are present
      transform: true, // Automatically transform payloads to DTO instances
    }),
  );

  await app.listen(3000);
}
bootstrap();
