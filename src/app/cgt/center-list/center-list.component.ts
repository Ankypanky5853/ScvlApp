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
  public show:boolean = false;
  public buttonName:any = 'Show';
  toggle() {
    this.show = !this.show;
    if(this.show)  
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";
  }
  CentreData = [
    {
      id: '1',
      cname: 'Thani',
      vname: 'Thana',
      time: '12/06/18 to 14/06/18',
      status: 'Not Started',
      bname: 'kota',
    },
    {
      id: '2',
      cname: 'Thani2',
      vname: 'Thana2',
      time: '10/06/18 to 12/06/18',
      status: 'Pending',
      bname: 'kota2',
    },
    {
      id: '3',
      cname: 'Thani3',
      vname: 'Thana3',
      time: '11/06/18 to 13/06/18',
      status: 'Pending',
      bname: 'kota3',
    },
    {
      id: '4',
      cname: 'Thani4',
      vname: 'Thana4',
      time: '08/06/18 to 10/06/18',
      status: 'Not Done',
      bname: 'kota',
    },
    {
      id: '5',
      cname: 'Thani5',
      vname: 'Thana5',
      time: '19/05/18 to 22/05/18',
      status: 'Completed',
      bname: 'kota5',
    },
    {
      id: '6',
      cname: 'Thani6',
      vname: 'Thana6',
      time: '14/05/18 to 16/05/18',
      status: 'Completed',
      bname: 'kota6',
    },
    {
      id: '7',
      cname: 'Thani7',
      vname: 'Thana7',
      time: '14/05/18 to 16/05/18',
      status: 'Completed',
      bname: 'kota6',
    },
    {
      id: '8',
      cname: 'Thani8',
      vname: 'Thana8',
      time: '14/05/18 to 16/05/18',
      status: 'Completed',
      bname: 'kota8',
    },
    {
      id: '9',
      cname: 'Thani9',
      vname: 'Thana9',
      time: '14/05/18 to 16/05/18',
      status: 'Completed',
      bname: 'kota9',
    }
  ];

}
