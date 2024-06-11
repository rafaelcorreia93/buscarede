import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-map-directions',
  standalone: true,
  imports: [],
  templateUrl: './map-directions.component.html',
  styleUrl: './map-directions.component.scss'
})
export class MapDirectionsComponent {
  @Input() distance = '0';
}
