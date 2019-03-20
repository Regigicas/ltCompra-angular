import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlimentoCarritoComponent } from './alimento-carrito.component';

describe('AlimentoCarritoComponent', () => {
  let component: AlimentoCarritoComponent;
  let fixture: ComponentFixture<AlimentoCarritoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlimentoCarritoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlimentoCarritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
