import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { GlobalMiddleWare } from './middleWare/global.middleware'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1');
  app.use(GlobalMiddleWare);
  await app.listen(3000);
}
bootstrap();
