import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecionaPlanoComponent } from './seleciona-plano.component';

describe('SelecionaPlanoComponent', () => {
  let component: SelecionaPlanoComponent;
  let fixture: ComponentFixture<SelecionaPlanoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelecionaPlanoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelecionaPlanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
