import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultTeamComponent } from './result-team.component';

describe('ResultTeamComponent', () => {
  let component: ResultTeamComponent;
  let fixture: ComponentFixture<ResultTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
