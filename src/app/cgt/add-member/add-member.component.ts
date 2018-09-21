import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.css']
})
export class AddMemberComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
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
}
