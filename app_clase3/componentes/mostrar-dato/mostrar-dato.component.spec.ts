import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarDatoComponent } from './mostrar-dato.component';

describe('MostrarDatoComponent', () => {
  let component: MostrarDatoComponent;
  let fixture: ComponentFixture<MostrarDatoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarDatoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarDatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
