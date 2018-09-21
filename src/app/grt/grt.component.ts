import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
@Component({
  selector: 'app-grt',
  templateUrl: './grt.component.html',
  styleUrls: ['./grt.component.css']
})
export class GrtComponent implements OnInit {

  constructor(private router:Router) {
	this.router.navigate(['./grt/GrtList']);
}

  ngOnInit() {
  }
}
