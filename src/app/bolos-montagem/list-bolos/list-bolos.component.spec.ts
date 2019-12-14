import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBolosComponent } from './list-bolos.component';

describe('ListBolosComponent', () => {
  let component: ListBolosComponent;
  let fixture: ComponentFixture<ListBolosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListBolosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBolosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
