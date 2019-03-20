import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlergenosCheckBoxComponent } from './alergenos-check-box.component';

describe('AlergenosCheckBoxComponent', () => {
  let component: AlergenosCheckBoxComponent;
  let fixture: ComponentFixture<AlergenosCheckBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlergenosCheckBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlergenosCheckBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
