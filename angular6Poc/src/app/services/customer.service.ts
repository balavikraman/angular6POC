import {Injectable} from '@angular/core';
import{Customer} from '../models/customer.model';

@Injectable()

export class CustomerService{
    private customer: Customer[]=[

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
    getCustomer():Customer[]{
        return this.customer;
    }
    saveCustomer(saveCustomer:Customer){
        this.customer.push(saveCustomer);
    }
    }
