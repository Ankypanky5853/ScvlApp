import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-villages-list',
  templateUrl: './villages-list.component.html',
  styleUrls: ['./villages-list.component.css']
})
export class VillagesListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  villageSurvey = [
    {
      Code: '11',
      Name: 'ABCDEF',
      PostOffice: 'ABCDEF',
      Block: 'ABCDEF',
      Status: 'Complete',
      Approvedby: 'Aakash kumar',
      Pincode: '123756'
    },
    {
      Code: '12',
      Name: 'ABCDEF',
      PostOffice: 'ABCDEF',
      Block: 'ABCDEF',
      Status: 'Complete',
      Approvedby: 'Aakash kumar',
      Pincode: '123756'
    },
    {
      Code: '13',
      Name: 'ABCDEF',
      PostOffice: 'ABCDEF',
      Block: 'ABCDEF',
      Status: 'Complete',
      Approvedby: 'Aakash kumar',
      Pincode: '123756'
    },
    {
      Code: '14',
      Name: 'ABCDEF',
      PostOffice: 'ABCDEF',
      Block: 'ABCDEF',
      Status: 'Pending',
      Approvedby: '',
      Pincode: '123756'
    },
    {
      Code: '15',
      Name: 'ABCDEF',
      PostOffice: 'ABCDEF',
      Block: 'ABCDEF',
      Status: 'Pending',
      Approvedby: '',
      Pincode: '123756'
    },
    {
      Code: '16',
      Name: 'ABCDEF',
      PostOffice: 'ABCDEF',
      Block: 'ABCDEF',
      Status: 'Pending',
      Approvedby: '',
      Pincode: '123756'
    },
    {
      Code: '17',
      Name: 'ABCDEF',
      PostOffice: 'ABCDEF',
      Block: 'ABCDEF',
      Status: 'Pending',
      Approvedby: '',
      Pincode: '123756'
    }
  ];
}
