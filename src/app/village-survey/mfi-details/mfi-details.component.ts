import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mfi-details',
  templateUrl: './mfi-details.component.html',
  styleUrls: ['./mfi-details.component.css']
})
export class MfiDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  MFIdata = [
    {
      id: '1',
      Name: 'Windstorm',
      Year: '2015',
      TotalCustomer: '4000',
      Repayment: '95',
    },
    {
      id: '2',
      Name: 'Annapurna',
      Year: '2016',
      TotalCustomer: '10000',
      Repayment: '90',
    },
    {
      id: '3',
      Name: 'Asirvad',
      Year: '2017',
      TotalCustomer: '12000',
      Repayment: '85',
    },
    {
      id: '4',
      Name: 'Arohan',
      Year: '2016',
      TotalCustomer: '2000',
      Repayment: '92',
    },
    {
      id: '5',
      Name: 'Bandhan',
      Year: '2015',
      TotalCustomer: '3000',
      Repayment: '90',
    },
    {
      id: '6',
      Name: 'BSS',
      Year: '2015',
      TotalCustomer: '5000',
      Repayment: '85',
    }
  ];
}
