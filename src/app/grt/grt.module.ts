import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GrtListComponent } from './grt-list/grt-list.component';
import { MembersListComponent } from './members-list/members-list.component';
import { GrtFormComponent } from './grt-form/grt-form.component';
import { GrtComponent } from './grt.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
const appRoutes: Routes = [
  {
    path: 'grt',
    component: GrtComponent,
    children: [
      { path: '', component: GrtListComponent   },
      { path: 'GrtList', component: GrtListComponent },
      { path: 'GrtForm', component: GrtFormComponent },
      { path: 'MembersList', component: MembersListComponent },
    ]
  }

];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(appRoutes)
  ],
  exports: [RouterModule],
  declarations: [GrtListComponent, MembersListComponent, GrtFormComponent]
})
export class GrtModule { }
