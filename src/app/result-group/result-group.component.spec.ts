import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultGroupComponent } from './result-group.component';

describe('ResultGroupComponent', () => {
  let component: ResultGroupComponent;
  let fixture: ComponentFixture<ResultGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
