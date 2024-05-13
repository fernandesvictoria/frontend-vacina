import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MontadorasConsultaComponent } from './montadoras-consulta.component';

describe('MontadorasConsultaComponent', () => {
  let component: MontadorasConsultaComponent;
  let fixture: ComponentFixture<MontadorasConsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MontadorasConsultaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MontadorasConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
