import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildDataBindingComponent } from './child-data-binding.component';

describe('ChildDataBindingComponent', () => {
  let component: ChildDataBindingComponent;
  let fixture: ComponentFixture<ChildDataBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildDataBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildDataBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
