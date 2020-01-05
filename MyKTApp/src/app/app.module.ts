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

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    AppHeaderComponent,
    routingComponents
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
    EditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
 export class TeamDetails{
   constructor(
     public TEAM_ID : number,
     public TEAM_FULL_NAME : string,
     public TEAM_ABBREVIATED_NAME : string,
     public TEAM_DESCRIPTION : string,
     public TEAM_LOGO_PATH : string){}
 }
