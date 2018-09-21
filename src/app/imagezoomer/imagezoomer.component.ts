import { Component, OnInit } from '@angular/core';
import { NgxImageZoomModule, NgxImageZoomComponent } from 'ngx-image-zoom';
import {trigger, state, style, animate, transition} from '@angular/animations';
// imports:[
//   NgxImageZoomModule.forRoot() 
// ]
@Component({
  selector: 'app-imagezoomer',
  templateUrl: './imagezoomer.component.html',
  styleUrls: ['./imagezoomer.component.css'],
  animations: [
    // Each unique animation requires its own trigger. The first argument of the trigger function is the name
    trigger('rotatedState', [
        state('default', style({ transform: 'rotate(0)' })),
        state('rotated', style({ transform: 'rotate(-180deg)' })),
        transition('rotated => default', animate('400ms ease-out')),
        transition('default => rotated', animate('400ms ease-in'))
  ])
]
})

export class ImagezoomerComponent implements OnInit {
  state: string = 'default';


  rotate() {
    this.state = (this.state === 'default' ? 'rotated' : 'default');
}
  constructor() { 
    
  }
  
  private setZoomMode:string = 'click';

  public myFullresImage ="../../assets/img/docs/bankpassbook.jpg";
  public myThumbnail ="../../assets/img/docs/thumb_1.jpg";

  public myFullresImage2 ="../../assets/img/docs/kyc1.jpg";
  public myThumbnail2 ="../../assets/img/docs/thumb_2.jpg";

  ngOnInit() {
    
    
  }

}
