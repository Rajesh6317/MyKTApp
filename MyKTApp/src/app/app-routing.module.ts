import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { TeamsOverviewComponent } from './teams-overview/teams-overview.component';
import { AboutTeamComponent } from './teams-overview/about-team/about-team.component';
import { AddTeamComponent } from './teams-overview/add-team/add-team.component';
import { HomeAboutComponent } from './home-about/home-about.component';
import { UpdateTeamComponent } from './teams-overview/update-team/update-team.component';

const routes: Routes = [
    {path:'', redirectTo:'/Home', pathMatch:'full'},
    {path:'Home', component:HomeAboutComponent},
    {path:'TeamsOverview', component:TeamsOverviewComponent},
    {path:'AboutTeam/:id', component:AboutTeamComponent},
    {path:'AddTeam', component:AddTeamComponent},
    {path:'UpdateTeam/:id', component:UpdateTeamComponent},
];

@NgModule({
imports:[RouterModule.forRoot(routes)],
exports:[RouterModule]
})

export class AppRoutingModule{}
export const routingComponents = [
    HomeAboutComponent,
    TeamsOverviewComponent,
    AboutTeamComponent,
    AddTeamComponent,
    UpdateTeamComponent]
