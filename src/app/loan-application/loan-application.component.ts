import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-loan-application',
  templateUrl: './loan-application.component.html',
  styleUrls: ['./loan-application.component.css']
})
export class LoanApplicationComponent implements OnInit {
 
  public kycImage: string = "kyc1";
  public imageUrl: string = "http://36.255.3.67/Audit_app/images/logo.png";
  closeResult: string;
  status: boolean = false;
  clickEvent() {
    this.status = !this.status;
  }

  constructor(private modalService: NgbModal) { }

  //    openBackDropCustomClass(content) {
  //      this.modalService.open(content, {backdropClass: 'light-blue-backdrop'});
  //    }

  openWindowCustomClass(content) {
    this.modalService.open(content, { windowClass: 'dark-modal' });
  }

  openSm(content) {
    this.modalService.open(content, { size: 'sm' });
  }

  openLg(content) {
    this.modalService.open(content, { size: 'lg' });
  }

  //    openVerticallyCentered(content) {
  //      this.modalService.open(content, { centered: true });
  //    }

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
  getStyle() {

    const style = `display: none`;
    return style;
  }
  LoanApplications=[
                    {
                      id:'1',
                      name:'Kamla Devi',
                      code:'C001:002:26',
                      branch:'Kota (C001)',
                      center:'C001:002',
                      amount:'25000',
                      time:'12/06/18 3:17pm',
                    },
                    {
                      id:'2',
                      name:'Sumitra Rani',
                      code:'C001:002:27',
                      branch:'Kota (C001)',
                      center:'C001:002',
                      amount:'20000',
                      time:'12/06/18 3:18pm',
                    },
                    {
                      id:'3',
                      name:'JaiMala',
                      code:'C001:002:30',
                      branch:'Kota (C001)',
                      center:'C001:002',
                      amount:'35000',
                      time:'12/06/18 4:08pm',
                    },
                    {
                      id:'4',
                      name:'Rajbala',
                      code:'C001:002:29',
                      branch:'Kota (C001)',
                      center:'C001:002',
                      amount:'22000',
                      time:'12/06/18 3:42pm',
                    },
                    {
                      id:'5',
                      name:'Bimla Devi',
                      code:'C001:003:12',
                      branch:'Kota (C001)',
                      center:'C001:003',
                      amount:'15000',
                      time:'13/06/18 1:12pm',
                    },
                    {
                      id:'6',
                      name:'Thani',
                      code:'C001:003:14',
                      branch:'Kota (C001)',
                      center:'C001:003',
                      amount:'25000',
                      time:'13/06/18 1:58pm',
                    },
                    
                    ]
  }
  