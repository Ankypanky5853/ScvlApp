import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-center-management',
  templateUrl: './center-management.component.html',
  styleUrls: ['./center-management.component.css']
})
export class CenterManagementComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  CentreManagement = [
    {
      CenterCode: '1',
      StaffCode: 'Thani',
      ccode: 'B001:001',
      StartManagingDate: '12-06-2018',
      EndManagingDate: '12-06-2018',
    },
  
  ];
}
