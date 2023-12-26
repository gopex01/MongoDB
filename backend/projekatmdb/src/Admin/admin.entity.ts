import { Role } from 'src/Roles/roles.enum';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity('Admin')
export class AdminEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  username: string;
  @Column()
  password: string;
  @Column()
  rola:Role;
}
