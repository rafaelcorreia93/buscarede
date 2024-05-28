import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecionaProcedimentoComponent } from './seleciona-procedimento.component';

describe('SelecionaProcedimentoComponent', () => {
  let component: SelecionaProcedimentoComponent;
  let fixture: ComponentFixture<SelecionaProcedimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelecionaProcedimentoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelecionaProcedimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
