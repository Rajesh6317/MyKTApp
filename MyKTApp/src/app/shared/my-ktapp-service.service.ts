import { Injectable, Input } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TeamDetails, UserDetails} from "../app.module";
import {SessionStorageService} from 'ngx-webstorage'
@Injectable({
  providedIn: 'root'
})
export class MyKTAppServiceService {
  // @Input() userName :string;
  webAPIEndpoint : string = "http://localhost:49355/MyKTAppWebAPI/";
  constructor(private http : HttpClient, private sessionState :SessionStorageService) {}
  public listTeams : TeamDetails[];
  public aboutTeam : TeamDetails;
  public userDetails : string;

  public getUser(){
    const endpoint = this.webAPIEndpoint +"api/GetUser";
    return this.http.get(endpoint)
    .toPromise().then(response => this.userDetails = response as string);
  }

  public addTeam(teamFullName:string, teamAbbreviatedName:string, teamLogo:File, teamDescription:string, KTPlan:File){
    const endpoint = this.webAPIEndpoint + "api/AddTeam";
    const formData : FormData = new FormData();
    formData.append('teamFullName', teamFullName);
    formData.append('teamAbbreviatedName', teamAbbreviatedName);
    if (teamLogo != null){
      formData.append('TeamLogo', teamLogo , teamLogo.name);
    }
    formData.append('teamDescription', teamDescription);
    if (KTPlan != null){
      formData.append('KTPlan',KTPlan, KTPlan.name);
    }
    formData.append('userName', this.sessionState.retrieve("userName"));
    return this.http.post(endpoint,formData);
  }

  public getTeams(){
    const endpoint = this.webAPIEndpoint + "api/GetTeams";
    return this.http.get(endpoint)
    .toPromise().then(response => this.listTeams = response as TeamDetails[]);
  }

  public getTeam(id){
    const endpoint = this.webAPIEndpoint + "api/GetTeam/" + id;
    return this.http.get(endpoint)
    .toPromise().then(response => this.aboutTeam = response as TeamDetails);
  }

  public updateTeam(id, teamFullName:string, teamAbbreviatedName:string, teamLogo:File, teamDescription:string, KTPlan : File){
    const endpoint = this.webAPIEndpoint + "api/UpdateTeam/" + id;
    const formData : FormData = new FormData();
    formData.append('teamFullName', teamFullName);
    formData.append('teamAbbreviatedName', teamAbbreviatedName);
    if (teamLogo != null){
      formData.append('TeamLogo', teamLogo , teamLogo.name);
    }
    formData.append('teamDescription', teamDescription);
    if (KTPlan != null){
      formData.append('KTPlan',KTPlan, KTPlan.name);
    }
    formData.append('userName', this.sessionState.retrieve("userName"));
    return this.http.post(endpoint,formData);
  }

  public uploadDocument(document : File){
    const endpoint = this.webAPIEndpoint + "api/uploadDocument/"
    const formData : FormData = new FormData();
    formData.append("documentToUpload", document, document.name)
    return this.http.post(endpoint,formData);
  }
}
//  public addComponent()