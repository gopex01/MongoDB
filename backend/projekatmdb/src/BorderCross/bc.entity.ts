import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class BorderCrossEntity{
    @PrimaryGeneratedColumn()
    Id:number;
    @Column()
    Name:string;
    
}