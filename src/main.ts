import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as CookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.use(CookieParser());
  app.enableCors({
    origin: ['http://localhos:3001'],
    credentials: true,
    exposedHeaders: 'set-cookie'
  })


  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
