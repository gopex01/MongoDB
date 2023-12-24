import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('user')
export class UserEntity{
    
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    nameAndSurname:string;
    @Column()
    email:string;
    @Column()
    username:string;
    @Column()
    password:string;
    @Column()
    phoneNumber:string;
    @Column()
    dateOfBirth:Date;
    @Column()
    JMBG:string;
    @Column()
    verified:Boolean;
    //@Column()
    //role:string;
}