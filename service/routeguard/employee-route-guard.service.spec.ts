import { TestBed } from '@angular/core/testing';

import { EmployeeRouteGuardService } from './employee-route-guard.service';

describe('EmployeeRouteGuardService', () => {
  let service: EmployeeRouteGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeRouteGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
