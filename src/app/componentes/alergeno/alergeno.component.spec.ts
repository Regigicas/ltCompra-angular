import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlergenoComponent } from './alergeno.component';

describe('AlergenoComponent', () => {
  let component: AlergenoComponent;
  let fixture: ComponentFixture<AlergenoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlergenoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlergenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
