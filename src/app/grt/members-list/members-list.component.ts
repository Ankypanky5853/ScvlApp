import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-members-list',
  templateUrl: './members-list.component.html',
  styleUrls: ['./members-list.component.css']
})
export class MembersListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  MemberData=[
    {
    code:'145632',
    name:'Amrita',
    father:'JaiKishen',
    age:'35',
    keyrelation:'NA',
    status:'Pending',
    },
    {
    code:'123456',
    name:'Jaya',
    father:'Krishan Kumar',
    age:'39',
    keyrelation:'NA',
    status:'Pending',
    },
    {
    code:'145263',
    name:'Durga',
    father:'Bhagwan Dash',
    age:'30',
    keyrelation:'NA',
    status:'Pending',
    },
    {
    code:'145635',
    name:'Bimla Devi',
    father:'Dharam Singh',
    age:'45',
    keyrelation:'NA',
    status:'Pending',
    },
    {
    code:'145636',
    name:'Sunitadevi',
    father:'Vijaypal',
    age:'38',
    keyrelation:'NA',
    status:'Pending',
    },
    {
    code:'145637',
    name:'Kamlesh',
    father:'Rajkumar',
    age:'42',
    keyrelation:'NA',
    status:'Pending',
    }
    ];
}
