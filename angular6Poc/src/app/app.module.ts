import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule,Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ListCustomersComponent } from './customer/list-customers/list-customers.component';
import { CreateCustomerComponent } from './customer/create-customer/create-customer.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

const appRoutes: Routes=[
  {
    path:'list',component:ListCustomersComponent},
    {path:'create',component:CreateCustomerComponent},
    {path:'',redirectTo:'/list',pathMatch:'full'}
];
@NgModule({
  declarations: [
    AppComponent,
    ListCustomersComponent,
    CreateCustomerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    BsDatepickerModule.forRoot(),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
