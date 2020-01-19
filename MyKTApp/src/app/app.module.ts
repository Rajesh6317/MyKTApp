import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { FormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { EditorModule } from '@tinymce/tinymce-angular';
import { UpdateTeamComponent } from './teams-overview/update-team/update-team.component';
import{NgxWebstorageModule} from "ngx-webstorage";
import { ClaimsOverviewComponent } from './claims-overview/claims-overview.component';
import { UpdateClaimsOverviewComponent } from './claims-overview/update-claims-overview/update-claims-overview.component';
import { TeamComponentOverviewComponent } from './team-component-overview/team-component-overview.component';
import { TeamComponentListComponent } from './team-component-overview/team-component-list/team-component-list.component';
import { TeamComponentDetailComponent } from './team-component-overview/team-component-detail/team-component-detail.component';
import { UpdateTeamComponentDetailComponent } from './team-component-overview/update-team-component-detail/update-team-component-detail.component';
import { AddNewComponentComponent } from './team-component-overview/add-new-component/add-new-component.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    AppHeaderComponent,
    routingComponents,
    UpdateTeamComponent,
    ClaimsOverviewComponent,
    UpdateClaimsOverviewComponent,
    TeamComponentOverviewComponent,
    TeamComponentListComponent,
    TeamComponentDetailComponent,
    UpdateTeamComponentDetailComponent,
    AddNewComponentComponent,
    
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    EditorModule,
    NgxWebstorageModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 }

 export class UserDetails{
  constructor(
    public USER_ID : string,
    public USER_NAME: string){}
}

 export class TeamDetails{
   constructor(
     public TEAM_ID : number,
     public TEAM_FULL_NAME : string,
     public TEAM_ABBREVIATED_NAME : string,
     public TEAM_DESCRIPTION : string,
     public TEAM_LOGO_PATH : string,
     public TEAM_KT_PLAN_PATH : string){}
 }

 