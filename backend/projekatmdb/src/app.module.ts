import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BorderCrossEntity } from './BorderCross/bc.entity';
import { BorderCrossModule } from './BorderCross/bc.module';
import { NotificationModule } from './Notification/notifications.module';
import { TermModule } from './Term/term.module';
import { UserEntity } from './User/user.entity';
import { UserModule } from './User/user.module';
import { AuthModule } from './Auth/auth.module';
import { AdminModule } from './Admin/admin.module';
import { AdminEntity } from './Admin/admin.entity';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/mongodb'),
    NotificationModule,
    BorderCrossModule,
    UserModule,
    AdminModule,
    TermModule,
    AuthModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'pufla12',
      database: 'ProjekatMDB',
      entities: [BorderCrossEntity, UserEntity,AdminEntity],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
