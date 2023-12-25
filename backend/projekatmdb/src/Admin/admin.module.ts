import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminEntity } from './admin.entity';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { UserEntity } from 'src/User/user.entity';
import { UserModule } from 'src/User/user.module';
import { UserService } from 'src/User/user.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([AdminEntity]),
  ],
  controllers: [AdminController],
  providers: [AdminService],
  exports: [AdminService],
})
export class AdminModule {}
