import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPrestadorComponent } from './lista-prestador.component';

describe('ListaPrestadorComponent', () => {
  let component: ListaPrestadorComponent;
  let fixture: ComponentFixture<ListaPrestadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaPrestadorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaPrestadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
