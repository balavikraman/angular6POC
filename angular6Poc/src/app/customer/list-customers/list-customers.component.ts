import { Component, OnInit } from '@angular/core';
import {Customer} from  'src/app/models/customer.model';
import {CustomerService} from 'src/app/services/customer.service';
@Component({
  selector: 'app-list-customers',
  templateUrl: './list-customers.component.html',
  styleUrls: ['./list-customers.component.css']
})
export class ListCustomersComponent implements OnInit {
  customer :Customer[];
  constructor( private _customerListSer :CustomerService ) { }

  ngOnInit() {
    this.customer=this._customerListSer.getCustomer();
  }

}
