import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {TeamDetails} from "../app.module"
@Injectable({
  providedIn: 'root'
})
export class MyKTAppServiceService {
  webAPIEndpoint : string = "http://localhost:49355/MyKTAppWebAPI/";
  constructor(private http : HttpClient) {}

  public listTeams : TeamDetails[];
  public aboutTeam : TeamDetails;

  public postFile(teamFullName:string, teamAbbreviatedName:string, teamLogo:File, teamDescription:string){
    const endpoint = this.webAPIEndpoint + "api/AddTeam";
    const formData : FormData = new FormData();
    formData.append('teamFullName', teamFullName);
    formData.append('teamAbbreviatedName', teamAbbreviatedName);
    formData.append('TeamLogo', teamLogo , teamLogo.name);
    formData.append('teamDescription', teamDescription);
    return this.http.post(endpoint,formData);
  }

  public getTeams(){
    const endpoint = this.webAPIEndpoint + "api/GetTeams";
    this.http.get(endpoint)
    .toPromise().then(response => this.listTeams = response as TeamDetails[]);
  }

  public getTeam(id){
    const endpoint = this.webAPIEndpoint + "api/GetTeam/" + id;
    this.http.get(endpoint)
    .toPromise().then(response => this.aboutTeam = response as TeamDetails);
  }
}
