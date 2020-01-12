import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MyKTAppServiceService } from 'src/app/shared/my-ktapp-service.service';
import{Router} from '@angular/router';

@Component({
  selector: 'app-about-team',
  templateUrl: './about-team.component.html',
  styleUrls: ['./about-team.component.css']
})

export class AboutTeamComponent implements OnInit {
  public imagePath = "http://localhost:49355/MyKTAppWebAPI/Common/Images/TeamLogo/";
  public KTPath = "http://localhost:49355/MyKTAppWebAPI/Common/KTPlans/";
  public KTPlanExists: boolean = true;
  public aboutTeam;
  constructor(private routeId :ActivatedRoute, private getTeamsService: MyKTAppServiceService, private router:Router) { }

  ngOnInit() {
    let id = parseInt(this.routeId.snapshot.paramMap.get('id'));
    this.getTeamsService.getTeam(id)
    .then(data => {
      this.aboutTeam = data;
      if(this.aboutTeam.TEAM_KT_PLAN_PATH != null) this.KTPlanExists = false;
    });
  }
  
  UpdateTeam(teamId){
      this.router.navigate(['/UpdateTeam',teamId]);
    }
  }
