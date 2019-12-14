import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMontagemComponent } from './form-montagem.component';

describe('FormMontagemComponent', () => {
  let component: FormMontagemComponent;
  let fixture: ComponentFixture<FormMontagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormMontagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormMontagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
