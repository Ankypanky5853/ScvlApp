import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-member-details',
  templateUrl: './member-details.component.html',
  styleUrls: ['./member-details.component.css']
})
export class MemberDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public show:boolean = false;
  public buttonName:string= 'Show';
  StateList=[
    {
      value:'ABC',
      Text:'Abc',
    },
    {
      value:'ABC',
      Text:'Abc',
    }
  ];
  DistrictList=[
    {
      value:'ABC',
      Text:'Abc',
    },
    {
      value:'ABC',
      Text:'Abc',
    }
  ];
  SubDistrictList=[
    {
      value:'ABC',
      Text:'Abc',
    },
    {
      value:'ABC',
      Text:'Abc',
    }
  ];
  toggle(){
    this.show = !this.show;
    if(this.show)  
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";
  }
}
