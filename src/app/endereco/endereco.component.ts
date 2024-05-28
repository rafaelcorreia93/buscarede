import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

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

  ngOnInit(): void {
  }

  ngAfterViewInit() {
      this.autocomplete = new google.maps.places.Autocomplete(this.enderecoInput.nativeElement, this.options);

      this.autocomplete.addListener('place_changed', () => {
        console.log(this.autocomplete.getPlace().geometry?.location?.toJSON());
      });
  }

  getLocation(): void{
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position)=>{
          const longitude = position.coords.longitude;
          const latitude = position.coords.latitude;
          console.log('lat ' + latitude);
          console.log('lon ' + longitude);
        });
    } else {
       console.log("No support for geolocation")
    }
  }

}
