import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-staffextradetails',
  templateUrl: './staffextradetails.component.html',
  styleUrls: ['./staffextradetails.component.css']
})
export class StaffextradetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
	url = '';
	
	onSelectFile(event) {
	    if (event.target.files && event.target.files[0]) {
	      var reader = new FileReader();
				
	      reader.readAsDataURL(event.target.files[0]); // read file as data url

	      reader.onload = (event) => { // called once readAsDataURL is completed
	        this.url = (<FileReader>event.target).result;
	      }
	    }
	  }
}
