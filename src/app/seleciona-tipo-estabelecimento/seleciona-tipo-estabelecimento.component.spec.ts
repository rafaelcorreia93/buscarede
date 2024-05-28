import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecionaTipoEstabelecimentoComponent } from './seleciona-tipo-estabelecimento.component';

describe('SelecionaTipoEstabelecimentoComponent', () => {
  let component: SelecionaTipoEstabelecimentoComponent;
  let fixture: ComponentFixture<SelecionaTipoEstabelecimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelecionaTipoEstabelecimentoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelecionaTipoEstabelecimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
