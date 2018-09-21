import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stafflist',
  templateUrl: './stafflist.component.html',
  styleUrls: ['./stafflist.component.css']
})
export class StafflistComponent implements OnInit {
currentPage = 1;
  constructor() { }

  ngOnInit() {
  }
StaffList=[
	{
		Staffid:'1',
		StaffCode:'123456',
		staffName:'Abhishek',
		Designation:'Sr. Excutive',
		Department:'Accounts',
		Location:'Head Office'
	},
	{
		Staffid:'2',
		StaffCode:'123457',
		staffName:'Anurag',
		Designation:'Sr. Excutive',
		Department:'Accounts',
		Location:'Head Office'
	},
	{
		Staffid:'3',
		StaffCode:'123458',
		staffName:'Amit',
		Designation:'Excutive',
		Department:'Accounts',
		Location:'Head Office'
	},
	{
		Staffid:'4',
		StaffCode:'123459',
		staffName:'Bhirm',
		Designation:'Sr. Excutive',
		Department:'Accounts',
		Location:'Head Office'
	},
	{
		Staffid:'5',
		StaffCode:'123460',
		staffName:'Chirag',
		Designation:'Sr. Manager',
		Department:'HR',
		Location:'Head Office'
	},
	{
		Staffid:'6',
		StaffCode:'123461',
		staffName:'Chitra',
		Designation:'Sr. Excutive',
		Department:'HR',
		Location:'Head Office'
	},
	{
		Staffid:'7',
		StaffCode:'123469',
		staffName:'Shivangi',
		Designation:'Sr. Excutive',
		Department:'HR',
		Location:'Head Office'
	},
	{
		Staffid:'8',
		StaffCode:'123462',
		staffName:'Dipika',
		Designation:'Excutive',
		Department:'FIG',
		Location:'Head Office'
	},{
		Staffid:'9',
		StaffCode:'123463',
		staffName:'Deepanshi',
		Designation:'Sr. Excutive',
		Department:'FIG',
		Location:'Head Office'
	},

	{
		Staffid:'10',
		StaffCode:'123464',
		staffName:'Fathima',
		Designation:'Excutive',
		Department:'Insurance',
		Location:'Head Office'
	},
	{
		Staffid:'11',
		StaffCode:'123465',
		staffName:'Gorav',
		Designation:'Sr. Excutive',
		Department:'Insurance',
		Location:'Head Office'
	}
];
}
