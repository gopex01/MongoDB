import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BorderCrossEntity } from './BorderCross/bc.entity';
import { BorderCrossModule } from './BorderCross/bc.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/mongodb'),UserModule,BorderCrossModule,
  TypeOrmModule.forRoot({
    type:'postgres',
    host:'localhost',
    port:5432,
    username:'postgres',
    password:'pufla12',
    database:'ProjekatMDB',
    entities:[BorderCrossEntity],
    synchronize:true

  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
