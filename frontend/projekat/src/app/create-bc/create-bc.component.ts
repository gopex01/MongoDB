import { Component, OnInit } from '@angular/core';
import { BorderCross } from '../models/border-cross.model';
import { BorderCrossService } from '../services/border-cross.service';

@Component({
  selector: 'app-create-bc',
  templateUrl: './create-bc.component.html',
  styleUrls: ['./create-bc.component.css']
})
export class CreateBcComponent implements OnInit{
  Name:string;
  Username:string;
  Password:string;
  Location:string;
  Country:string;
  Type:string;
  WorkHour:string;
  TransportConnections:string;
  Capacity:string;
  Email:string;
  PhoneNumber:string;
  Description:string;
  constructor(private bcService:BorderCrossService)
  {
    this.Name="";
    this.Username="";
    this.Password="";
    this.Location="";
    this.Country="";
    this.Type="";
    this.WorkHour="";
    this.TransportConnections="";
    this.Capacity="";
    this.Email="";
    this.PhoneNumber="";
    this.Description="";
  }
  ngOnInit(): void {

  }
  create()
  {
    let bc:BorderCross={
      name:this.Name,
      username:this.Username,
      password:this.Password,
      location:this.Location,
      country:this.Country,
      type:this.Type,
      workHour:this.WorkHour,
      transportConnections:this.TransportConnections,
      capacity:this.Capacity,
      email:this.Email,
      phoneNumber:this.PhoneNumber,
      description:this.Description
    };
    this.bcService.addBC(bc);
  }

}
