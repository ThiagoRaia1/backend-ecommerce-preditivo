import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './usuarios/entities/usuario.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DB_URL,
      autoLoadEntities: true, // carrega todas as entidades automaticamente, usar apenas em dev
      synchronize: true, // só use em dev, cria tabelas automaticamente
      // entities: [Usuario] // usar em prod listando todas as entidades e remover autoLoadEntities
    }),
  ],
})
export class AppModule {}
