import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteNieto2Component } from './componente-nieto2.component';

describe('ComponenteNieto2Component', () => {
  let component: ComponenteNieto2Component;
  let fixture: ComponentFixture<ComponenteNieto2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenteNieto2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteNieto2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
