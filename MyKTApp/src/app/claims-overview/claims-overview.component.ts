import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-claims-overview',
  templateUrl: './claims-overview.component.html',
  styleUrls: ['./claims-overview.component.css']
})
export class ClaimsOverviewComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }
  
  public updateClaimsOverview(){
    this.router.navigate(['/UpdateClaimsOverview']);
  }
  

}
