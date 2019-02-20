import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {
  apiURL: string = "https://worldcup.sfg.io/teams/results";
  constructor(private httpClient: HttpClient) {}
  // Mi creo un metodo per prendere i Teams
  public showResultTeam() :Promise<any[]> {
    return this.httpClient.get<any[]>(this.apiURL).toPromise();
  }
  apiURI: string ="https://worldcup.sfg.io/teams/group_results";
  // Mi creo un metodo per prendere i risultati dei gruppi
  public showResultGroup() :Promise<any[]> {
    return this.httpClient.get<any[]>(this.apiURI).toPromise();
  }
  apiURI2: string ="https://worldcup.sfg.io/teams/";
  // Mi creo un metodo per prendere i fifaCode dei Teams
  public showFifaCode() :Promise<any[]> {
    return this.httpClient.get<any[]>(this.apiURI2).toPromise();
  }
}
