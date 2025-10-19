import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilitar validaciones globales si tienes DTOs con class-validator
  app.useGlobalPipes(new ValidationPipe({
    transform: true, // convierte strings a números
    whitelist: true, // ignora campos extra
    forbidNonWhitelisted: true, // lanza error si hay campos extra
  }));
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap().catch((err) => {
  console.error('❌ Error al iniciar NestJS:', err);
  process.exit(1);
});
