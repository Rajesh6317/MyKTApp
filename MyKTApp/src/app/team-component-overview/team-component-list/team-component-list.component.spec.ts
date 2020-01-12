import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamComponentListComponent } from './team-component-list.component';

describe('TeamComponentListComponent', () => {
  let component: TeamComponentListComponent;
  let fixture: ComponentFixture<TeamComponentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamComponentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamComponentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
