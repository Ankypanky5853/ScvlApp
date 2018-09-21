import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularDualListBoxModule } from 'angular-dual-listbox';
import { PassMemberComponent } from './pass-member/pass-member.component';
import { FailMemberComponent } from './fail-member/fail-member.component';
import { MemberDetailsComponent } from './member-details/member-details.component';
import { MemberListComponent } from './member-list/member-list.component';
import { PpidetailsComponent } from './ppidetails/ppidetails.component';
import { CenterListComponent } from './center-list/center-list.component';
import { AddMemberComponent } from './add-member/add-member.component';
import { RouterModule, Routes } from '@angular/router';
import { CgtComponent } from './cgt.component';
import { FormsModule }        from '@angular/forms';
import { GroupCreationComponent } from './group-creation/group-creation.component';
const appRoutes: Routes = [
  {
    path: 'cgt',
    component: CgtComponent,
    children: [
      { path: '', component: CenterListComponent, pathMatch:"full" },
      { path: 'CenterList', component: CenterListComponent },
      { path: 'AddMember', component: AddMemberComponent },
      { path: 'MembersList', component: MemberListComponent },
      { path: 'PassMembersList', component: PassMemberComponent },
      { path: 'FailMembersList', component: FailMemberComponent },
      { path: 'AddMembersDetails', component: MemberDetailsComponent },
      { path: 'MembersPPIDetails', component: PpidetailsComponent },
      { path: 'GroupCreation', component: GroupCreationComponent },
    ]
  }

];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AngularDualListBoxModule,
    RouterModule.forChild(appRoutes)
  ],
  exports: [RouterModule],
  declarations: [AddMemberComponent, PassMemberComponent, FailMemberComponent, MemberDetailsComponent, MemberListComponent, PpidetailsComponent, CenterListComponent, GroupCreationComponent]
})
export class CgtModule { }
