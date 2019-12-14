import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBolosComponent } from './form-bolos.component';

describe('FormBolosComponent', () => {
  let component: FormBolosComponent;
  let fixture: ComponentFixture<FormBolosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormBolosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormBolosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
