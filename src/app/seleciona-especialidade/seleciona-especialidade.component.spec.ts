import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecionaEspecialidadeComponent } from './seleciona-especialidade.component';

describe('SelecionaEspecialidadeComponent', () => {
  let component: SelecionaEspecialidadeComponent;
  let fixture: ComponentFixture<SelecionaEspecialidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelecionaEspecialidadeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelecionaEspecialidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
