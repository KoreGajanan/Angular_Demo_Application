import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgPropertyBindingComponent } from './ng-property-binding.component';

describe('NgPropertyBindingComponent', () => {
  let component: NgPropertyBindingComponent;
  let fixture: ComponentFixture<NgPropertyBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgPropertyBindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgPropertyBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
