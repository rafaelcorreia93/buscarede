import { Injectable, signal } from '@angular/core';
import { environment } from '../environments/environment.development';
import { HttpClient } from '@angular/common/http';

type coordinates = {
  lat: number;
  lon: number;
}

@Injectable({
  providedIn: 'root'
})
export class MapService {
  public userLat = signal(0);
  public userLon = signal(0);

  constructor(private http: HttpClient) {}

  getDirections(start: coordinates, end: coordinates) {
    let url = 'https://api.openrouteservice.org/v2/directions/driving-car?api_key='
     + environment.openrouteKey + '&start=' + start.lon + ',' + start.lat + '&end=' + end.lon + ',' + end.lat;
    this.http.get(url).subscribe(res => {
      console.log(res);
    });
  }

}
