import { Role } from 'src/Roles/roles.enum';
import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';

@Entity('BorderCross', { name: 'Border cross' })
@Unique(['name'])
export class BorderCrossEntity {
  @PrimaryGeneratedColumn()
  Id: number;
  @Column()
  name: string;
  @Column()
  username: string;
  @Column()
  password: string;
  @Column()
  location: string;
  @Column()
  country: string;
  @Column()
  type: string;
  @Column()
  workHour: string;
  @Column()
  transportConnections: string;
  @Column()
  capacity: string;
  @Column()
  email: string;
  @Column()
  phoneNumber: string;
  @Column()
  description: string;
  @Column()
  rola:Role;
}
