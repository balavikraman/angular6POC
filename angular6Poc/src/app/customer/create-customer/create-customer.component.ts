import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Customer} from  'src/app/models/customer.model'
import{CustTypeLOV} from  'src/app/models/customer.model'
import {BsDatepickerConfig} from 'ngx-bootstrap/datepicker'
@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  BsDatepickerConfig: Partial<BsDatepickerConfig>
  custGender='male';
  custypeLOV:CustTypeLOV[]=[
    {id:1,name:"Type1"},
    {id:2,name:"Type2"},
    {id:3,name:"Type3"},
    {id:4,name:"Type4"}
  ]
  customer: Customer[]=[
    {CusName:null,
    CusId:null,
    CusEmail:null,
    CusPhone:null,
    CusPhotopath:"assets/images/user1.jpg",
    CusDob:null,
    CusStatus:null}
  ]
  constructor() { 
    this.BsDatepickerConfig=Object.assign({},{containerClass:'theme-green',
    showWeekNumbers:false,
    minDate:new Date(1990,0,1),
    maxDate:new Date(),
    dateInputFormat:'DD/MM/YYYY'

  })
  }

  ngOnInit() {
  }
  createCust(custForm:NgForm):void{
    console.log(custForm);
  }
}
