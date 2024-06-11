import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestadorDetalheComponent } from './prestador-detalhe.component';

describe('PrestadorDetalheComponent', () => {
  let component: PrestadorDetalheComponent;
  let fixture: ComponentFixture<PrestadorDetalheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrestadorDetalheComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrestadorDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
