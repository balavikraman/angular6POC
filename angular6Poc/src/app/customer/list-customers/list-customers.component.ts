import { Component, OnInit } from '@angular/core';
import {Customer} from  'src/app/models/customer.model'
@Component({
  selector: 'app-list-customers',
  templateUrl: './list-customers.component.html',
  styleUrls: ['./list-customers.component.css']
})
export class ListCustomersComponent implements OnInit {
  customer :Customer[]=[
    {
    CusName:"Bala",
    CusId:1,
    CusEmail:"vikram.gmail.com",
    CusPhone:8521468,
    CusPhotopath:"assets/images/user1.jpg",
    CusDob:new Date ('2018,10,6'),
    CusStatus:true
    },
    {
      CusName:"vikram",
      CusId:1,
      CusEmail:"vikram.gmail.com",
      CusPhone:8521468,
      CusPhotopath:"assets/images/user1.jpg",
      CusDob:new Date ('2018,05,16'),
      CusStatus:true
      },
      {
        CusName:"cust1",
        CusId:1,
        CusEmail:"vikram.gmail.com",
        CusPhone:8521468,
        CusPhotopath:"assets/images/user1.jpg",
        CusDob:new Date ('2018,09,25'),
        CusStatus:true
        }
    
  ]
  constructor() { }

  ngOnInit() {
  }

}
