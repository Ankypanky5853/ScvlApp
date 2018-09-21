// import { Component, OnInit,  } from '@angular/core';
import {Component, ViewEncapsulation} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-permissions',
  templateUrl: './permissions.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./permissions.component.css']
})
export class PermissionsComponent {
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

}