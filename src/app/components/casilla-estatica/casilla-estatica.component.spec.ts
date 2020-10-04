import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasillaEstaticaComponent } from './casilla-estatica.component';

describe('CasillaEstaticaComponent', () => {
  let component: CasillaEstaticaComponent;
  let fixture: ComponentFixture<CasillaEstaticaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasillaEstaticaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasillaEstaticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
