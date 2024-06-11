import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapDirectionsComponent } from './map-directions.component';

describe('MapDirectionsComponent', () => {
  let component: MapDirectionsComponent;
  let fixture: ComponentFixture<MapDirectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapDirectionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MapDirectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
