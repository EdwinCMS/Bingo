import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GruposFigurasComponent } from './grupos-figuras.component';

describe('GruposFigurasComponent', () => {
  let component: GruposFigurasComponent;
  let fixture: ComponentFixture<GruposFigurasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GruposFigurasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GruposFigurasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
