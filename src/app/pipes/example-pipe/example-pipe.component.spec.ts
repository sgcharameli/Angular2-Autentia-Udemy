import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamplePipeComponent } from './example-pipe.component';

describe('ExamplePipeComponent', () => {
  let component: ExamplePipeComponent;
  let fixture: ComponentFixture<ExamplePipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamplePipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamplePipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
