import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.css']
})
export class CenterComponent implements OnInit {

  constructor(private router:Router) {
	  this.router.navigate(['./center/CenterList']);
	 }

  ngOnInit() {
  }

}
