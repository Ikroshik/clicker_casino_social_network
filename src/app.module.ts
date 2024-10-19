import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './user/entities/user.entity';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'loc2004',
      database: 'clicker',
      models: [User],
      // autoLoadModels: true,
      // synchronize: true,
    }),
    UserModule, 
    AuthModule,
    ConfigModule.forRoot()
  ]
})
export class AppModule {}
