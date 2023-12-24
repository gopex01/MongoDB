import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminEntity } from './admin.entity';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { UserEntity } from 'src/User/user.entity';
import { UserModule } from 'src/User/user.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([AdminEntity]),
    TypeOrmModule.forFeature([UserEntity]),
    UserModule,
  ],
  controllers: [AdminController],
  providers: [AdminService],
  exports: [AdminService],
})
export class AdminModule {}
