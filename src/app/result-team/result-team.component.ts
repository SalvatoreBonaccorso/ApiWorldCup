import { Component, OnInit } from '@angular/core';
import { TeamsService } from '../teams.service';

@Component({
  selector: 'app-result-team',
  templateUrl: './result-team.component.html',
  styleUrls: ['./result-team.component.css']
})
export class ResultTeamComponent implements OnInit {
  public teams: any[] = [];
  constructor(public teamsService: TeamsService) { };


  ngOnInit() {
    let promise = this.teamsService.showResultTeam();
    promise.then((results)=> {
      this.teams = results;
      console.log(this.teams);
    })
  }

}
