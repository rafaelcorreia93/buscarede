import { Component, ElementRef, ViewChild, signal } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HttpClient } from '@angular/common/http';
import { MapService } from '../map.service';

type GeoloactionResponse = {
  address: Adress;
  addresstype: string;
  boundingbox: string[];
  category: string;
  display_name: string;
  importance: number;
  lat: string;
  licence: string;
  lon: string;
  name: string;
  osm_id: number;
  osm_type: string;
  place_id: number;
  place_rank: number;
  type: string;
}

type Adress = {
    road: string;
    residential: string;
    subdistrict: string;
    city: string;
    municipality: string;
    county: string;
    state_district: string;
    state: string;
    region: string;
    postcode: string;
    country: string;
    country_code: string;
}

@Component({
  selector: 'app-endereco',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './endereco.component.html',
  styleUrl: './endereco.component.scss'
})
export class EnderecoComponent {
  @ViewChild('enderecoInput') enderecoInput!: ElementRef;

  autocomplete!: google.maps.places.Autocomplete;
  options = {
    componentRestrictions: { country: "br" },
    fields: ["address_components", "geometry", "name"]
  };
  loading = false;

  constructor(private http: HttpClient, private mapService: MapService){}

  ngOnInit(): void {
  }

  ngAfterViewInit() {
this.tryGoogleMaps();

  }

  getLocation(): void{
    if (navigator.geolocation) {
        this.loading = true;
        navigator.geolocation.getCurrentPosition((position)=>{
          const longitude = position.coords.longitude;
          const latitude = position.coords.latitude;
          this.mapService.userLat.set(latitude);
          this.mapService.userLon.set(longitude);
          let url = 'https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=' + latitude + '&lon=' + longitude;
          this.http.get(url).subscribe(res => {
            console.log(res);
            let completeData = res as GeoloactionResponse;
            let adress = completeData.address;
            let adressFormated = adress.road + ', ' + adress.city;
            this.fillAdress(adressFormated);
            this.loading = false;
          });
        });
    } else {
       console.log("Geolocalização não suportada")
    }
  }

  fillAdress(adress: string) {
    this.enderecoInput.nativeElement.value = adress;
  }

 tryGoogleMaps() {
    this.autocomplete = new google.maps.places.Autocomplete(this.enderecoInput.nativeElement, this.options);
  }

}
