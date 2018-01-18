import { TestBed, inject, async } from '@angular/core/testing';

import { UsersProxyService } from './users-proxy.service';
import { HttpClientModule } from '@angular/common/http';

describe('UsersProxyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [UsersProxyService]
    });
  });

  it('should be created', inject([UsersProxyService], (service: UsersProxyService) => {
    expect(service).toBeTruthy();
  }));

  it('should get user by username', async(() => {
    const service: UsersProxyService = TestBed.get(UsersProxyService);
    const username = 'sgcharameli';
    service.getUserByUsername(username).subscribe(
      response => expect(response.login).toEqual(username)
    );
  }));
});
