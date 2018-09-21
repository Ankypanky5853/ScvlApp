import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
@Component({
  selector: 'app-cgt',
  templateUrl: './cgt.component.html',
  styleUrls: ['./cgt.component.css']
})
export class CgtComponent implements OnInit {

  constructor(private router:Router) {
	  this.router.navigate(['cgt/CenterList']);
	 }
  public show:boolean = false;
  public buttonName:any = 'Show';
  ngOnInit() {
  }

  toggle() {
    this.show = !this.show;

    // CHANGE THE NAME OF THE BUTTON.
    if(this.show)  
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";
  }
}
