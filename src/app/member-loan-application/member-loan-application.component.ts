import { Component, ViewEncapsulation} from '@angular/core';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ImageViewerConfig, CustomEvent} from '../image-viewer/image-viewer-config.model';

@Component({
  selector: 'app-member-loan-application',
  templateUrl: './member-loan-application.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./member-loan-application.component.css'],
})
export class MemberLoanApplicationComponent{
closeResult: string;

  images = [
  
    'http://localhost:4200/assets/img/docs/kyc2.jpg',
    'http://localhost:4200/assets/img/docs/thumb_4.jpg',
    'http://localhost:4200/assets/img/docs/kyc1.jpg'
  ];

  imageIndexOne = 0;
  imageIndexTwo = 0;

  config: ImageViewerConfig = {customBtns: [{name: 'print', icon: 'fa fa-print'}, {name: 'link', icon: 'fa fa-link'}]};

  handleEvent(event: CustomEvent) {
    console.log(`${event.name} has been click on img ${event.imageIndex + 1}`);

    switch (event.name) {
      case 'print':
        console.log('run print logic');
        break;
    }
  }


  constructor(private modalService: NgbModal) { }


  openWindowCustomClass(content) {
    this.modalService.open(content, { windowClass: 'dark-modal' });
  }

  openLg(content) {
    this.modalService.open(content, { size: 'lg' });
  }

  // openVerticallyCentered(content) {
  //   this.modalService.open(content, { centered: true });
  // }
}
