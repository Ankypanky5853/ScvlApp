import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grt-list',
  templateUrl: './grt-list.component.html',
  styleUrls: ['./grt-list.component.css']
})
export class GrtListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  GrtList=[
    {
    id:'1',
    cname:'Thani',
    vname:'Thana',
    totalmembers: '15',
    status: 'Pending',
    by:'Aman Nagar',
    },
    {
    id:'2',
    cname:'Jumnagarh',
    vname:'Jumnagarh',
    totalmembers: '20',
    status: 'Pending',
    by:'Aman Nagar',
    },
    {
    id:'3',
    cname:'Thani3',
    vname:'Thana3',
    totalmembers: '13',
    status: 'Pending',
    by:'Aman Nagar',
    },
    {
    id:'4',
    cname:'Thani4',
    vname:'Thana4',
    totalmembers: '22',
    status: 'Pending',
    by:'Aman Nagar',
    },
    {
    id:'5',
    cname:'Thani5',
    vname:'Thana5',
    totalmembers: '27',
    status: 'Pending',
    by:'Aman Nagar',
    }
    ];
  
}
