import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamComponentDetailComponent } from './team-component-detail.component';

describe('TeamComponentDetailComponent', () => {
  let component: TeamComponentDetailComponent;
  let fixture: ComponentFixture<TeamComponentDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamComponentDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamComponentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
