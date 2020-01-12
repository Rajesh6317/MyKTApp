import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimsOverviewComponent } from './claims-overview.component';

describe('ClaimsOverviewComponent', () => {
  let component: ClaimsOverviewComponent;
  let fixture: ComponentFixture<ClaimsOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClaimsOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
