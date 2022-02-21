import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteNieto1Component } from './componente-nieto1.component';

describe('ComponenteNieto1Component', () => {
  let component: ComponenteNieto1Component;
  let fixture: ComponentFixture<ComponenteNieto1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenteNieto1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteNieto1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
