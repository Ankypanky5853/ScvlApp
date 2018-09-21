import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VillagesListComponent } from './villages-list/villages-list.component';
import { VillageDetailsComponent } from './village-details/village-details.component';
import { MfiDetailsComponent } from './mfi-details/mfi-details.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { VillageSurveyComponent } from './village-survey.component';


const appRoutes: Routes = [
  {
    path: 'VillageSurvey',
    component:VillageSurveyComponent,
    children: [
      // { path: '', redirectTo: 'CenterList' },
      { path: 'VillagesList', component: VillagesListComponent },
      { path: 'VillageDetails', component: VillageDetailsComponent },
      { path: 'MFIDetails', component: MfiDetailsComponent },
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
  declarations: [VillagesListComponent, VillageDetailsComponent, MfiDetailsComponent]
})
export class VillageSurveyModule { }
