import { Role } from 'src/Roles/roles.enum';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity('Admin')
export class AdminEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  Username: string;
  @Column()
  Password: string;
  @Column()
  rola:Role;
}
