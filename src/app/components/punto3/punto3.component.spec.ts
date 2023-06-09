import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Punto3Component } from './punto3.component';

describe('Punto3Component', () => {
  let component: Punto3Component;
  let fixture: ComponentFixture<Punto3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Punto3Component]
    });
    fixture = TestBed.createComponent(Punto3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
