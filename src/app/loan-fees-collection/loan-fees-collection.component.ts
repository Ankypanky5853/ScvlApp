import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loan-fees-collection',
  templateUrl: './loan-fees-collection.component.html',
  styleUrls: ['./loan-fees-collection.component.css']
})
export class LoanFeesCollectionComponent implements OnInit {

  constructor() { }

  public show:boolean = false;
  public buttonName:any = 'Show';
  ngOnInit() {
  }
  toggle() {
    this.show = !this.show;
    if(this.show)  
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";
  }

  Clientdata=[
    {
      center:'B001:C001',
      code:'B001:C001:001',
      name:'Mamta Devi',
      loancode:'B001:C001:001:02',
      age:'51',
      mobile:'8596895658',
      otpstatus:'pass',
      otpdate:'22/08/2018',
      cbstatus:'Pass',
      approvaldate:'21/08/2018',
      validity:'20/09/2018',
      approvalamount:'30000',
      Processingfees:'345.00',
      insurancefees:'615.00',
      docsstatus:'Pass'
    },
    {
      center:'B001:C001',
      code:'B001:C001:001',
      name:'Mamta Devi',
      loancode:'B001:C001:002:02',
      age:'51',
      mobile:'8596895658',
      otpstatus:'pass',
      otpdate:'22/08/2018',
      cbstatus:'Pass',
      approvaldate:'21/08/2018',
      validity:'20/09/2018',
      approvalamount:'30000',
      Processingfees:'345.00',
      insurancefees:'615.00',
      docsstatus:'Pass'
    },
    {
      center:'B001:C001',
      code:'B001:C001:001',
      name:'Mamta Devi',
      loancode:'B001:C001:004:02',
      age:'51',
      mobile:'8596895658',
      otpstatus:'pass',
      otpdate:'22/08/2018',
      cbstatus:'Pass',
      approvaldate:'21/08/2018',
      validity:'20/09/2018',
      approvalamount:'30000',
      Processingfees:'345.00',
      insurancefees:'615.00',
      docsstatus:'Pass'
    },
    {
      center:'B001:C001',
      code:'B001:C001:001',
      name:'Mamta Devi',
      loancode:'B001:C001:003:01',
      age:'51',
      mobile:'8596895658',
      otpstatus:'pass',
      otpdate:'22/08/2018',
      cbstatus:'Pass',
      approvaldate:'21/08/2018',
      validity:'20/09/2018',
      approvalamount:'30000',
      Processingfees:'345.00',
      insurancefees:'615.00',
      docsstatus:'Pass'
    }
  ]
}
