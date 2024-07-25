import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService)


  app.useGlobalPipes(new ValidationPipe(
    {
      transform : true,
      whitelist:true,  //je ne prends que mes données attendu
      forbidNonWhitelisted:true  // j'envoie une erreur
    }
  ));


  await app.listen(configService.get('HTTP_PORT') ||3000);
}
bootstrap();
