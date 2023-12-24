import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AdminEntity } from './admin.entity';
import { Admin, Repository } from 'typeorm';

Injectable();
export class AdminService {
  constructor(
    @InjectRepository(AdminEntity)
    private adminRepository: Repository<AdminEntity>,
  ) {}
  async addAdmin(input: AdminEntity) {
    const admin: AdminEntity = { ...input };
    if (!admin) {
      return {
        message: 'Error',
      };
    }
    try {
      await this.adminRepository.save(admin);
    } catch (error) {
      return error;
    }
  }
  async getAdmin(username: string) {
    return await this.adminRepository.findOne({
      where: { Username: username },
    });
  }
}
