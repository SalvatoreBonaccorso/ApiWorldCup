import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from  '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllMatchComponent } from './all-match/all-match.component';
import { ResultTeamComponent } from './result-team/result-team.component';
import { FifaCodeComponent } from './fifa-code/fifa-code.component';
import { ResultGroupComponent } from './result-group/result-group.component';

@NgModule({
  declarations: [
    AppComponent,
    AllMatchComponent,
    ResultTeamComponent,
    FifaCodeComponent,
    ResultGroupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
