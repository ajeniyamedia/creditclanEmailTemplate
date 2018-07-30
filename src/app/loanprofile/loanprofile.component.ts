import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService, StorageService } from '../_services/index';

@Component({
  selector: 'app-loanprofile',
  templateUrl: './loanprofile.component.html',
  styleUrls: ['./loanprofile.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoanprofileComponent implements OnInit {

  view = 'profile';
  loan_id;
  borrower;
currentUser:any;
  constructor(public customerService: CustomerService,
    public storageService: StorageService,
    public route: ActivatedRoute) {
      this.currentUser = this.storageService.read<any>('currentUser');
     }


  // Fetch the borrower information
  ngOnInit() {
    
    let sub = this.route.parent.params.subscribe(params => {
      this.loan_id = +params["id"];
      this.customerService.getCustomerByLoan(this.currentUser.token, this.loan_id)
        .subscribe(customer => {
          this.borrower = customer;
        });
    });
  }


  // Toogle View
  open(section) {
    this.view = section;
  }
  close() {
    this.view = 'profile';
  }




}
