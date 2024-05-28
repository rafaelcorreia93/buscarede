import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectAtendimentoVideoComponent } from './select-atendimento-video.component';

describe('SelectAtendimentoVideoComponent', () => {
  let component: SelectAtendimentoVideoComponent;
  let fixture: ComponentFixture<SelectAtendimentoVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectAtendimentoVideoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectAtendimentoVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
