import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { TeamsOverviewComponent } from './teams-overview/teams-overview.component';
import { AboutTeamComponent } from './teams-overview/about-team/about-team.component';
import { AddTeamComponent } from './teams-overview/add-team/add-team.component';
import { HomeAboutComponent } from './home-about/home-about.component';
import { UpdateTeamComponent } from './teams-overview/update-team/update-team.component';
import { ClaimsOverviewComponent } from './claims-overview/claims-overview.component';
import { UpdateClaimsOverviewComponent } from './claims-overview/update-claims-overview/update-claims-overview.component';
import {TeamComponentOverviewComponent} from './team-component-overview/team-component-overview.component';
import {AddNewComponentComponent} from './team-component-overview/add-new-component/add-new-component.component';

const routes: Routes = [
    {path:'', redirectTo:'/Home', pathMatch:'full'},
    {path:'Home', component:HomeAboutComponent},
    {path:'TeamsOverview', component:TeamsOverviewComponent},
    {path:'AboutTeam/:id', component:AboutTeamComponent},
    {path:'AddTeam', component:AddTeamComponent},
    {path:'UpdateTeam/:id', component:UpdateTeamComponent},
    {path: 'ClaimsOverview', component:ClaimsOverviewComponent},
    {path: 'UpdateClaimsOverview', component:UpdateClaimsOverviewComponent},
    {path: 'TeamComponents', component:TeamComponentOverviewComponent},
    {path: 'AddNewComponent', component:AddNewComponentComponent},
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
    UpdateTeamComponent,
    ClaimsOverviewComponent,
    UpdateClaimsOverviewComponent,
    TeamComponentOverviewComponent]
