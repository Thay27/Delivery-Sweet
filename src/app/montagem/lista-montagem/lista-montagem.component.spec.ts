import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaMontagemComponent } from './lista-montagem.component';

describe('ListaMontagemComponent', () => {
  let component: ListaMontagemComponent;
  let fixture: ComponentFixture<ListaMontagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaMontagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaMontagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
