import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgForindexDemoComponent } from './ng-forindex-demo.component';

describe('NgForindexDemoComponent', () => {
  let component: NgForindexDemoComponent;
  let fixture: ComponentFixture<NgForindexDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgForindexDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgForindexDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
