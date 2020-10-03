import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFiguraComponent } from './edit-figura.component';

describe('EditFiguraComponent', () => {
  let component: EditFiguraComponent;
  let fixture: ComponentFixture<EditFiguraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditFiguraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFiguraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
