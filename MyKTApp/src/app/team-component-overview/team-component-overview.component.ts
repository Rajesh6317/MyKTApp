import { Component, OnInit } from '@angular/core';
import { MyKTAppServiceService } from 'src/app/shared/my-ktapp-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-team-component-overview',
  templateUrl: './team-component-overview.component.html',
  styleUrls: ['./team-component-overview.component.css']
})
export class TeamComponentOverviewComponent implements OnInit {

  constructor(private getTeamsService : MyKTAppServiceService, private router:Router) { }

  ngOnInit() {
    this.getTeamsService.getTeams();
  }
  

}
