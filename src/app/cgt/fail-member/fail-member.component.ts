import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fail-member',
  templateUrl: './fail-member.component.html',
  styleUrls: ['./fail-member.component.css']
})
export class FailMemberComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
	FailMemberData=[
    {
    code:'145632',
    name:'Amrita',
    father:'JaiKishen',
    centre:'bhim1',
    village:'Bhima',
    branch:'Kota',
    },
    {
    code:'123456',
    name:'Jaya',
    father:'Krishan Kumar',
    centre:'bhim1',
    village:'Bhima',
    branch:'Kota',
    },
    {
    code:'145263',
    name:'Durga',
    father:'Bhagwan Dash',
    centre:'bhim1',
    village:'Bhima',
    branch:'Kota',
    },
    {
    code:'145635',
    name:'Bimla Devi',
    father:'Dharam Singh',
    centre:'bhim1',
    village:'Bhima',
    branch:'Kota',
    },
    {
    code:'145636',
    name:'Sunita Devi',
    father:'Vijaypal',
    centre:'bhim1',
    village:'Bhima',
    branch:'Kota',
    },
    {
    code:'145637',
    name:'Kamlesh',
    father:'Rajkumar',
    centre:'bhim1',
    village:'Bhima',
    branch:'Kota',
    }
    ];  
}
