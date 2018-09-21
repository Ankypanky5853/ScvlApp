import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCenterComponent } from './add-center/add-center.component';
import { CenterManagementComponent } from './center-management/center-management.component';
import { CenterListComponent } from './center-list/center-list.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule }        from '@angular/forms';
import { CenterComponent } from './center.component';
const appRoutes: Routes = [
  {
    path: 'center',
    component: CenterComponent,
    children: [
      { path: '', component: CenterListComponent },
      { path: 'CenterList', component: CenterListComponent },
      { path: 'AddCenter', component: AddCenterComponent },
      { path: 'CenterManagement', component: CenterManagementComponent },
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
  declarations: [AddCenterComponent, CenterManagementComponent, CenterListComponent]
})
export class CenterModule { }
