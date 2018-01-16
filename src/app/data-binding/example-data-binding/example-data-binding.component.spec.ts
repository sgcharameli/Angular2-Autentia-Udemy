import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleDataBindingComponent } from './example-data-binding.component';

describe('ExampleDataBindingComponent', () => {
  let component: ExampleDataBindingComponent;
  let fixture: ComponentFixture<ExampleDataBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleDataBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleDataBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
