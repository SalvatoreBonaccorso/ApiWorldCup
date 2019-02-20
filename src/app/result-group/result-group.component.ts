import { Component, OnInit } from '@angular/core';
import { TeamsService } from '../teams.service';

@Component({
  selector: 'app-result-group',
  templateUrl: './result-group.component.html',
  styleUrls: ['./result-group.component.css']
})
export class ResultGroupComponent implements OnInit {
  public groups: any[] = [];
  constructor(public teamsService: TeamsService) { };


  ngOnInit() {
    let promise = this.teamsService.showResultGroup();
    promise.then((results)=> {
      this.groups = results;
      console.log(this.groups);
    })
  }

}
