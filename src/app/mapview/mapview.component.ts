import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-mapview',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './mapview.component.html',
  styleUrl: './mapview.component.scss'
})
export class MapviewComponent {
  showMap = false;
  localControl = new FormControl('');
  api_key = 'AIzaSyAF34fXezC32fU3x6wQYS_1hN9tx1bf02s';
  endereco = 'RUA FELIPE CAMARAO, 196 CENTRO, DIADEMA - SP';
  srcImg = 'https://maps.googleapis.com/maps/api/staticmap?center=' + encodeURIComponent(this.endereco) + '&size=400x400&markers=color:red%7C'  + encodeURIComponent(this.endereco) + '&key=' + this.api_key;
  srcEmbedBaseUrl = 'https://www.google.com/maps/embed/v1/place?key=AIzaSyAF34fXezC32fU3x6wQYS_1hN9tx1bf02s&q=';
  srcEmbed!: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {}

  search() {
    const encoded = encodeURIComponent(this.localControl.value!);
    this.srcEmbed = this.sanitizer.bypassSecurityTrustResourceUrl(this.srcEmbedBaseUrl + encoded);
    this.showMap = true;
  }
}
