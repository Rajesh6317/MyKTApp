import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { MyKTAppServiceService } from 'src/app/shared/my-ktapp-service.service';


@Component({
  selector: 'app-about-team',
  templateUrl: './about-team.component.html',
  styleUrls: ['./about-team.component.css']
})
export class AboutTeamComponent implements OnInit {
  // public teamID;
  
  constructor(private routeId :ActivatedRoute, private getTeamsService: MyKTAppServiceService) { }

  ngOnInit() {
    let id = parseInt(this.routeId.snapshot.paramMap.get('id'));
    this.getTeamsService.getTeam(id);
     }
    
  }

