import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedeEssencialDetalhesComponent } from './rede-essencial-detalhes.component';

describe('RedeEssencialDetalhesComponent', () => {
  let component: RedeEssencialDetalhesComponent;
  let fixture: ComponentFixture<RedeEssencialDetalhesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RedeEssencialDetalhesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RedeEssencialDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
