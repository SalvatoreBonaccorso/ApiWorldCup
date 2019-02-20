import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FifaCodeComponent } from './fifa-code.component';

describe('FifaCodeComponent', () => {
  let component: FifaCodeComponent;
  let fixture: ComponentFixture<FifaCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FifaCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FifaCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
