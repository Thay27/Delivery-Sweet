import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormItensComponent } from './form-itens.component';

describe('FormItensComponent', () => {
  let component: FormItensComponent;
  let fixture: ComponentFixture<FormItensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormItensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormItensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
