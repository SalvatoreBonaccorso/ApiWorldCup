import { Component, OnInit } from '@angular/core';
import { TeamsService } from '../teams.service';

@Component({
  selector: 'app-fifa-code',
  templateUrl: './fifa-code.component.html',
  styleUrls: ['./fifa-code.component.css']
})
export class FifaCodeComponent implements OnInit {
  public teams: any[] = [];
  constructor(public teamsService: TeamsService) { };


  ngOnInit() {
    let promise = this.teamsService.showFifaCode();
    promise.then((results)=> {
      this.teams = results;
      console.log(this.teams);
    })
  }

}
