import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodigoBarrasManualComponent } from './codigo-barras-manual.component';

describe('CodigoBarrasManualComponent', () => {
  let component: CodigoBarrasManualComponent;
  let fixture: ComponentFixture<CodigoBarrasManualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodigoBarrasManualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodigoBarrasManualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
