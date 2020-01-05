import { TestBed } from '@angular/core/testing';

import { MyKTAppServiceService } from './my-ktapp-service.service';

describe('MyKTAppServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyKTAppServiceService = TestBed.get(MyKTAppServiceService);
    expect(service).toBeTruthy();
  });
});
