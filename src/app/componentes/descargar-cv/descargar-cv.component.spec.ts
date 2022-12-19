import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescargarCVComponent } from './descargar-cv.component';

describe('DescargarCVComponent', () => {
  let component: DescargarCVComponent;
  let fixture: ComponentFixture<DescargarCVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescargarCVComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescargarCVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
