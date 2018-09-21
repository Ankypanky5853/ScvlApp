import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-center-list',
  templateUrl: './center-list.component.html',
  styleUrls: ['./center-list.component.css']
})
export class CenterListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  CentreData = [
    {
      id: '1',
      cname: 'Thani',
      ccode: 'B001:001',
      vname: 'Thana',
      time: '12-06-2018',
      staff: 'Aakash Tiwari',
      status: 'Not Started',
      bname: 'kota',
    },
    {
      id: '2',
      cname: 'Thani2',
      ccode: 'B001:002',
      vname: 'Thana2',
      time: '10-06-2018',
      staff: 'deevan Singh',
      status: 'Pending',
      bname: 'kota2',
    },
    {
      id: '3',
      cname: 'Thani3',
      vname: 'Thana3',
      ccode: 'B001:003',
      time: '11-06-2018',
      status: 'Pending',
      staff: 'Vikas Mital',
      bname: 'kota3',
    },
    {
      id: '4',
      cname: 'Thani4',
      ccode: 'B001:004',
      vname: 'Thana4',
      time: '08-06-2018',
      status: 'Not Done',
      staff: 'Aakash Tiwari',
      bname: 'kota',
    },
    {
      id: '5',
      cname: 'Thani5',
      ccode: 'B001:005',
      vname: 'Thana5',
      time: '19-05-2018',
      status: 'Completed',
      staff: 'Lokesh Yadav',
      bname: 'kota5',
    },
    {
      id: '6',
      cname: 'Thani6',
      ccode: 'B001:006',
      vname: 'Thana6',
      time: '14-05-2018',
      status: 'Completed',
      staff: 'Jagdish Kumar',
      bname: 'kota6',
    },
    {
      id: '7',
      cname: 'Thani7',
      ccode: 'B001:007',

      vname: 'Thana7',
      time: '14-05-2018',
      status: 'Completed',
      staff: 'Mahesh Tomar',
      bname: 'kota6',
    },
    {
      id: '8',
      cname: 'Thani8',
      ccode: 'B001:008',
      vname: 'Thana8',
      time: '14-05-2018',
      status: 'Completed',
      staff: 'Dheeraj Kumar',
      bname: 'kota8',
    },
    {
      id: '9',
      cname: 'Thani9',
      ccode: 'B001:009',
      vname: 'Thana9',
      time: '14-05-2018',
      status: 'Completed',
      bname: 'kota9',
      staff: 'Aakash Tiwari',
    }
  ];
}
