import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class MatchService {
  public apiURL: string = "https://worldcup.sfg.io/matches";
  constructor(private httpClient: HttpClient) { }
// Mi creo un metodo per prendere i matches
  public all() :Promise<any[]> {
    return this.httpClient.get<any[]>(this.apiURL).toPromise();
  }
}