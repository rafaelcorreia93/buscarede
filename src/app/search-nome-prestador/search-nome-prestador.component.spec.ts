import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchNomePrestadorComponent } from './search-nome-prestador.component';

describe('SearchNomePrestadorComponent', () => {
  let component: SearchNomePrestadorComponent;
  let fixture: ComponentFixture<SearchNomePrestadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchNomePrestadorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchNomePrestadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
