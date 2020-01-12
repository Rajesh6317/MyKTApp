import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTeamComponentDetailComponent } from './update-team-component-detail.component';

describe('UpdateTeamComponentDetailComponent', () => {
  let component: UpdateTeamComponentDetailComponent;
  let fixture: ComponentFixture<UpdateTeamComponentDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateTeamComponentDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTeamComponentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
