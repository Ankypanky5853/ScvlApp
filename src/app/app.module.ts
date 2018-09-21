import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ImageViewerModule } from "ngx-image-viewer";
import { AppRoutingModule, routingcomponents } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }        from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent }    from './navbar/navbar.component';
import { DashboardheaderComponent } from './dashboardheader/dashboardheader.component';
import { DocszoomComponent } from './docszoom/docszoom.component';
import {VillageSurveyModule} from './village-survey/village-survey.module';
@NgModule({
  declarations: [
    AppComponent,
    routingcomponents,
    NavbarComponent,
    HeaderComponent,
    DashboardheaderComponent,
    DocszoomComponent,
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    VillageSurveyModule,
    AppRoutingModule,
    ImageViewerModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],

  bootstrap: [AppComponent]
})


export class AppModule {

}
