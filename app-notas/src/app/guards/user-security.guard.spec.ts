import { TestBed } from '@angular/core/testing';

import { UserSecurityGuard } from './user-security.guard';

describe('UserSecurityGuard', () => {
  let guard: UserSecurityGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UserSecurityGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
