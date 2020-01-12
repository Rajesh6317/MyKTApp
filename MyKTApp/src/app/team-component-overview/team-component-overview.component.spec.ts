import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamComponentOverviewComponent } from './team-component-overview.component';

describe('TeamComponentOverviewComponent', () => {
  let component: TeamComponentOverviewComponent;
  let fixture: ComponentFixture<TeamComponentOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamComponentOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamComponentOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
