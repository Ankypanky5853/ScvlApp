import { Component, OnInit } from '@angular/core';
// import {Component, ViewEncapsulation} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent implements OnInit {

   closeResult: string;

  constructor(private modalService: NgbModal) {}

  openBackDropCustomClass(content) {
    // this.modalService.open(content, {backdropClass: 'light-blue-backdrop'});
  }

  openWindowCustomClass(content) {
    this.modalService.open(content, { windowClass: 'dark-modal' });
  }

  openSm(content) {
    this.modalService.open(content, { size: 'sm' });
  }

  openLg(content) {
    this.modalService.open(content, { size: 'lg' });
  }

  openVerticallyCentered(content) {
    // this.modalService.open(content, { centered: true });
  }

  ngOnInit() {
  }
Statedata = [
  {
  	Id:'1',
  	State:'Haryana',
  	Zone: 'North',
  	Country:'India',
  	},
  	{
  	Id:'2',
  	State:'Uttar Pradesh',
  	Zone: 'North',
  	Country:'India',
  	},
  	{
  	Id:'3',
  	State:'Bihar',
  	Zone: 'North',
  	Country:'India',
  	},
  	{
  	Id:'4',
  	State:'Punjab',
  	Zone: 'North',
  	Country:'India',
  	},
  	{
  	Id:'5',
  	State:'Uttarakhand',
  	Zone: 'North',
  	Country:'India',
  	},
  	{
  	Id:'6',
  	State:'Himachal Pradesh',
  	Zone: 'North',
  	Country:'India',
  	},
  	];
}
