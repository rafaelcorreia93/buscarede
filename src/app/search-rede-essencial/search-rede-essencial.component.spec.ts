import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchRedeEssencialComponent } from './search-rede-essencial.component';

describe('SearchRedeEssencialComponent', () => {
  let component: SearchRedeEssencialComponent;
  let fixture: ComponentFixture<SearchRedeEssencialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchRedeEssencialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchRedeEssencialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
