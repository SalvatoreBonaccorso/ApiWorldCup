import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllMatchComponent } from './all-match/all-match.component';
import { ResultTeamComponent } from './result-team/result-team.component';
import { FifaCodeComponent } from './fifa-code/fifa-code.component';
import { ResultGroupComponent } from './result-group/result-group.component';

const routes: Routes = [
  { path:"allMatch",component:AllMatchComponent},
  { path:"resultTeam",component:ResultTeamComponent},
  { path:"resultTeamGroup",component:ResultGroupComponent},
  { path:"fifaCodeTeam",component:FifaCodeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
