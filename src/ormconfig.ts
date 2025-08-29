import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const config: TypeOrmModuleOptions = {
  type: 'postgres',
  url: process.env.DB_URL,
  synchronize: true, // Não usar true em produção
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
};
