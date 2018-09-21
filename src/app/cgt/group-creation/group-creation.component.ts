import { Component, OnInit } from '@angular/core';
import { Group } from '../../Model/Group';
import { StarTemplateContext } from '@ng-bootstrap/ng-bootstrap/rating/rating';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-group-creation',
  templateUrl: './group-creation.component.html',
  styleUrls: ['./group-creation.component.css']
})
export class GroupCreationComponent implements OnInit {

  constructor() { }

  status: boolean = false;

  clickEvent() {
    this.status = !this.status;
  }
  ngOnInit() {
  }
  source = ['Pawn', 'Rook', 'Knight', 'Bishop', 'Queen', 'King'];
  target = [];

  Shift(event, member: Group, index: number, indicator: string) {
    if (indicator == "Left") {      //For Left Side List
      if (event.target.checked == true) {
        this.class1[index]=true;
        this.tmplist1.push(member);
      }
      else if (event.target.checked == false) {
        this.class1[index]=false;
        var index = this.tmplist1.indexOf(member);
        if (index >= 0)
          this.tmplist1.splice(index, 1);
      }
    }
    else if (indicator == "Right") {   //For Right Side List
      if (event.target.checked == true) {
        this.class2[index]=true;
        this.tmplist2.push(member);
      }
      else if (event.target.checked == false) {
        this.class2[index]=false;
        var index = this.tmplist2.indexOf(member);
        if (index >= 0)
          this.tmplist2.splice(index, 1);
      }
    }
  }

  MoveLeft() {
    var T: Group[] = [];
    if (this.tmplist1.length > 0) {
      for (var i = 0; i < this.tmplist1.length; i++) {
        this.List2.push(this.tmplist1[i]);
        T.push(this.tmplist1[i]);
      }
      for (var i = 0; i < T.length; i++) {
        var idx1 = this.List1.indexOf(T[i]);
        this.List1.splice(idx1, 1);
        var idx2 = this.tmplist1.indexOf(T[i]);
        this.tmplist1.splice(idx2, 1);
        this.class1[i]=false;
      }
    }
  }

  MoveRight() {
    var T: Group[] = [];
    if (this.tmplist2.length > 0) {
      for (var i = 0; i < this.tmplist2.length; i++) {
        this.List1.push(this.tmplist2[i]);
        T.push(this.tmplist2[i]);;
      }
      for (var i = 0; i < T.length; i++) {
        var idx1 = this.List2.indexOf(T[i]);
        this.List2.splice(idx1, 1);
        var idx2 = this.tmplist2.indexOf(T[i]);
        this.tmplist2.splice(idx2, 1);
        this.class2[i]=false;
      }
    }
  }
  toggleSelect = function(event){  

    this.allneighbourhoods = event.target.checked;
    this.neighbourhoods.forEach(function(item){
     console.log(item);
     item.selected = event.target.checked;
  });

}       
  public class1:boolean[]=[]; //For Left Side List Active CSS
  public class2:boolean[]=[]; //For Right Side List Active CSS
  public tmplist1: Group[] = []; //Temporary List For Left Side Actual List
  public tmplist2: Group[] = []; //Temporary List For Right Side Actual List
  public List1: Group[] = [
    {
      Id: 1,
      MemberName: 'Mamta Devi 1',
      MemberCode: 'B001:001:002',
    },
    {
      Id: 2,
      MemberName: 'Mamta Devi 2',
      MemberCode: 'B001:001:003',
    },
    {
      Id: 3,
      MemberName: 'Mamta Devi 3',
      MemberCode: 'B001:001:004',
    },
    {
      Id: 4,
      MemberName: 'Mamta Devi 4',
      MemberCode: 'B001:001:005',
    }
  ];
  public List2: Group[] = [
    {
      Id: 5,
      MemberName: 'Mamta Devi 5',
      MemberCode: 'B001:001:006',
    },
    {
      Id: 6,
      MemberName: 'Mamta Devi 6',
      MemberCode: 'B001:001:007',
    },
    {
      Id: 7,
      MemberName: 'Mamta Devi 7',
      MemberCode: 'B001:001:008',
    },
    {
      Id: 8,
      MemberName: 'Mamta Devi 8',
      MemberCode: 'B001:001:009',
    }
  ];
}
