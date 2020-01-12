import { Component, OnInit } from '@angular/core';
import { MyKTAppServiceService } from 'src/app/shared/my-ktapp-service.service';
import{UserDetails} from 'src/app/app.module';
import{SessionStorageService} from 'ngx-webstorage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[MyKTAppServiceService]
})
export class AppComponent implements OnInit {
  title = 'MyKTApp';
  userDetails : string;
  constructor(private getUserDetails :MyKTAppServiceService, private sessionState : SessionStorageService){}

  ngOnInit(){
    this.getUserDetails.getUser()
    .then(data => {this.userDetails = data as string;
      this.sessionState.store("userName",data)});
    
  }
}
