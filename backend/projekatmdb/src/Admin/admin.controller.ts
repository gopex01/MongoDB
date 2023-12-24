import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { AdminService } from './admin.service';
import { AdminEntity } from './admin.entity';

@Controller('Admin')
export class AdminController {
  constructor(
    @Inject(UserService)
    private readonly userService: UserService,
    private readonly adminService: AdminService,
  ) {}

  @Post('addAdmin')
  async addAdmin(@Body() input: AdminEntity) {
    return this.adminService.addAdmin(input);
  }
}
