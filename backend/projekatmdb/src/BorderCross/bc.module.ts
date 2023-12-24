import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BorderCrossEntity } from './bc.entity';
import { BorderCrossService } from './bc.service';
import { BorderCrossController } from './bc.controller';

@Module({
  imports: [TypeOrmModule.forFeature([BorderCrossEntity])],
  providers: [BorderCrossService],
  controllers: [BorderCrossController],
})
export class BorderCrossModule {}
