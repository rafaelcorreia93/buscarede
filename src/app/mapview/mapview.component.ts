import { Component, Input } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import {MatDialogModule} from '@angular/material/dialog';

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
  @Input() origem!: string;
  @Input() destino!: string;
  endereco = 'RUA FELIPE CAMARAO, 196 CENTRO, DIADEMA - SP';
  srcImg = 'https://www.google.com/maps/embed/v1/directions?key=' + this.api_key + '&origin=' + this.origem + '&destination=' + this.destino + 'avoid=tolls';
  srcEmbedBaseUrl = 'https://www.google.com/maps/embed/v1/place?key=AIzaSyAF34fXezC32fU3x6wQYS_1hN9tx1bf02s&q=';
  srcEmbed!: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.srcEmbed = this.sanitizer.bypassSecurityTrustResourceUrl(this.srcImg);
    this.showMap = true;
  }

  search() {
    const encoded = encodeURIComponent(this.localControl.value!);
    this.srcEmbed = this.sanitizer.bypassSecurityTrustResourceUrl(this.srcEmbedBaseUrl + encoded);
    this.showMap = true;
  }
}


// encodeURIComponent(this.endereco)
