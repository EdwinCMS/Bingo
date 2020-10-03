import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFiguraComponent } from './new-figura.component';

describe('NewFiguraComponent', () => {
  let component: NewFiguraComponent;
  let fixture: ComponentFixture<NewFiguraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewFiguraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewFiguraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
