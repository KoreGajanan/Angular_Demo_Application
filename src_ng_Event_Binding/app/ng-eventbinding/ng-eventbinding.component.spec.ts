import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgEventbindingComponent } from './ng-eventbinding.component';

describe('NgEventbindingComponent', () => {
  let component: NgEventbindingComponent;
  let fixture: ComponentFixture<NgEventbindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgEventbindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgEventbindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
