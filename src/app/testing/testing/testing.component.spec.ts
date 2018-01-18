import { UsersProxyService } from './../users-proxy.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingComponent } from './testing.component';
import { UsersProxyServiceFake } from '../users-proxy.service.fake.spec';

describe('TestingComponent', () => {
  let component: TestingComponent;
  let fixture: ComponentFixture<TestingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestingComponent ],
      providers: [
        {provide: UsersProxyService, useClass: UsersProxyServiceFake}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should search a user', () => {
    const username = 'sgcharameli';
    component.search(username);
    component.user$.subscribe(
      user => expect(user.login).toEqual(username)
    );
  });
});
