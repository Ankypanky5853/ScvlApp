import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
@Component({
  selector: 'app-village-survey',
  templateUrl: './village-survey.component.html',
  styleUrls: ['./village-survey.component.css']
})
export class VillageSurveyComponent implements OnInit {

  constructor(private router:Router) {
	  this.router.navigate(['./VillageSurvey/VillagesList']);
	 }
  
  ngOnInit() {
  }

}
