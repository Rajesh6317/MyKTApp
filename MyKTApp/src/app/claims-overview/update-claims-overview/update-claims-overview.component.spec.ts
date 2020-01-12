import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateClaimsOverviewComponent } from './update-claims-overview.component';

describe('UpdateClaimsOverviewComponent', () => {
  let component: UpdateClaimsOverviewComponent;
  let fixture: ComponentFixture<UpdateClaimsOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateClaimsOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateClaimsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
