import { Component, OnInit } from '@angular/core';
import { MatchService } from '../match.service';

@Component({
  selector: 'app-all-match',
  templateUrl: './all-match.component.html',
  styleUrls: ['./all-match.component.css']
})
export class AllMatchComponent implements OnInit {
  public matches: any[] = [];
  constructor(public matchService: MatchService) { };

  ngOnInit() {
    let promise = this.matchService.all();
    promise.then((results)=> {
      this.matches = results;
      console.log(this.matches);
    })


  }

}
