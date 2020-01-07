import { Component, OnInit } from '@angular/core';
import { TeamDetails } from '../app.module';
import { MyKTAppServiceService } from 'src/app/shared/my-ktapp-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-teams-overview',
  templateUrl: './teams-overview.component.html',
  styleUrls: ['./teams-overview.component.css'],
  providers:[MyKTAppServiceService]
})
export class TeamsOverviewComponent implements OnInit {

  constructor(private getTeamsService : MyKTAppServiceService, private router:Router) { }

  ngOnInit() {
    this.getTeamsService.getTeams();
  }
  
  public AboutTeam(teamDetail){
    this.router.navigate(['/AboutTeam',teamDetail.TEAM_ID]);
  }
}
