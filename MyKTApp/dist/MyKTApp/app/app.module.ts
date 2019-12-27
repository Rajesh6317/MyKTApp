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
import { CKEditorModule }from '@ckeditor/ckeditor5-angular';

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
    CKEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
 export class TeamDetails{
   constructor(
     public teamID : number,
     public teamName : string,
     public teamAbbrevation : string,
     public teamDescription : string,
     public teamImagePath : string){}
 }
