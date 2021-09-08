import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgIfElseDemoComponent } from './ng-if-else-demo.component';

describe('NgIfElseDemoComponent', () => {
  let component: NgIfElseDemoComponent;
  let fixture: ComponentFixture<NgIfElseDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgIfElseDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgIfElseDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
