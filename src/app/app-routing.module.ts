import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VillageSurveyComponent } from './village-survey/village-survey.component';
import { CgtComponent } from './cgt/cgt.component';
import { LoanApplicationComponent } from './loan-application/loan-application.component';
import { MemberLoanApplicationComponent } from './member-loan-application/member-loan-application.component';
import { HelpchatComponent } from './helpchat/helpchat.component';
import { GrtComponent } from './grt/grt.component';
import { LoginComponent } from './login/login.component';
import { PermissionsComponent } from './permissions/permissions.component';
import { Header2Component } from './header2/header2.component';
import { NewapiComponent } from './newapi/newapi.component';
import { Newapi2Component } from './newapi2/newapi2.component';
import { FormdesignComponent } from './formdesign/formdesign.component';
import { ReportdashboardComponent } from './reportdashboard/reportdashboard.component';
import { Addstaff2Component } from './addstaff2/addstaff2.component';
import { Staffprofile2Component } from './staffprofile2/staffprofile2.component';
import { StaffProfileComponent } from './staff-profile/staff-profile.component';
import { Staffprofile3Component } from './staffprofile3/staffprofile3.component';
import { UpdatestaffdetailsComponent } from './updatestaffdetails/updatestaffdetails.component';
import { CardddesignComponent } from './cardddesign/cardddesign.component';
import { StateComponent } from './state/state.component';
import { StafflistComponent } from './stafflist/stafflist.component';
import { FormValueDesignComponent } from './form-value-design/form-value-design.component';
import { LoadingComponent } from './loading/loading.component';
import { LoanapprovalComponent } from './loanapproval/loanapproval.component';
import { LoanFeesCollectionComponent } from './loan-fees-collection/loan-fees-collection.component';
import { Login2Component } from './login2/login2.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StaffextradetailsComponent } from './staffextradetails/staffextradetails.component';
import { ImagezoomerComponent } from './imagezoomer/imagezoomer.component';
import { OperationsComponent } from './operations/operations.component';
import { NewLoanComponent } from './new-loan/new-loan.component';
import { MenuComponent } from './menu/menu.component';
import { LoandisbursementComponent } from './loandisbursement/loandisbursement.component';
import{CgtModule} from './cgt/cgt.module';
import{GrtModule} from './grt/grt.module';
import { CenterModule } from './center/center.module';
import { CenterComponent } from './center/center.component';
export const appRoutes: Routes = [
 { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'operations', component: OperationsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'form', component: FormdesignComponent },
  { path: 'village-survey', component: VillageSurveyComponent },
  { path: 'permission', component: PermissionsComponent },
  { path: 'newloan', component: NewLoanComponent },
  { path: 'loanFeesCollection', component: LoanFeesCollectionComponent },
  { path: 'disbursement', component: LoandisbursementComponent },
  { path: 'cgt', component: CgtComponent },
  { path: 'center', component: CenterComponent },
  { path: 'imagezoom', component: ImagezoomerComponent },
  { path: 'helpchat', component: HelpchatComponent },
  { path: 'formvalue', component: FormValueDesignComponent },
  { path: 'grt', component: GrtComponent },
  { path: 'loanApplication', component: LoanApplicationComponent },
  { path: 'loanapproval', component: LoanapprovalComponent },
  { path: 'loanApplication/id', component: MemberLoanApplicationComponent },
  { path: 'reports', component: ReportdashboardComponent },
  { path: 'stafflist', component: StafflistComponent },
  { path: 'addstaff2', component: Addstaff2Component },
  { path: 'staffprofile', component:  StaffProfileComponent},
  { path: 'staffprofile2', component:  Staffprofile2Component},
  { path: 'staffprofile3', component:  Staffprofile3Component},
  { path: 'staffextradetails', component:  StaffextradetailsComponent},
  { path: 'updatestaff', component:  UpdatestaffdetailsComponent},
  { path: 'createapi', component: NewapiComponent },
  { path: 'createapi2', component: Newapi2Component },
  { path: 'loadingbar', component: LoadingComponent },
  { path: 'login2', component: Login2Component },
  { path: 'design', component: CardddesignComponent },
  { path: 'state', component: StateComponent },
  { path: 'header2', component: Header2Component },
  { path: '**', component: PageNotFoundComponent }
  ]
@NgModule({
  imports: [CgtModule,
    GrtModule,
    CenterModule,
    RouterModule.forRoot(appRoutes, { useHash: true} )],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingcomponents = [LoginComponent,
                  DashboardComponent,
                  OperationsComponent,
									VillageSurveyComponent,
                  ImagezoomerComponent,
                  HelpchatComponent,
                  MenuComponent,
                  CgtComponent,
                  CenterComponent,
                  LoanapprovalComponent,
                  GrtComponent,
                  PermissionsComponent,
                  LoandisbursementComponent,
                  LoanApplicationComponent,
                  LoanFeesCollectionComponent,                  
                  MemberLoanApplicationComponent,
                  NewapiComponent,
                  FormdesignComponent,
                  Addstaff2Component,
                  FormValueDesignComponent,
                  StaffProfileComponent,
                  Staffprofile2Component,
                  Staffprofile3Component,
                  StafflistComponent,
                  StaffextradetailsComponent,
                  ReportdashboardComponent,
                  UpdatestaffdetailsComponent,
                  NewLoanComponent,
                  Newapi2Component,
                  LoadingComponent,
                  StateComponent,
                  Header2Component,
                  Login2Component,
                  CardddesignComponent,
									PageNotFoundComponent
								]
