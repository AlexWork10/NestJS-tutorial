import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilitar validaciones globales si tienes DTOs con class-validator
  app.useGlobalPipes(new ValidationPipe({
    transform: true, // convierte strings a números
    whitelist: true, // ignora campos extra
    forbidNonWhitelisted: true, // lanza error si hay campos extra
  }));

  //configuracion Swagger
  const config = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, documentFactory);

  // Habilitar CORS si es necesario
  app.enableCors();

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap().catch((err) => {
  console.error('❌ Error al iniciar NestJS:', err);
  process.exit(1);
});
