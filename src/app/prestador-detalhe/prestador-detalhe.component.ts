import { Component, Input } from '@angular/core';
import { SupabaseService } from '../supabase.service';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { MapService } from '../map.service';
type Prestador = {
  id: number;
  nome: string;
  contrato: number;
  endereco: string;
  uf: string;
  ddd: string;
  telefone: string;
  atendimento_video: boolean;
  email: string;
  site: string;
  lon: number;
  lat: number;
};

@Component({
  selector: 'app-prestador-detalhe',
  standalone: true,
  imports: [],
  templateUrl: './prestador-detalhe.component.html',
  styleUrl: './prestador-detalhe.component.scss'
})
export class PrestadorDetalheComponent {
  prestador!: Prestador;

  constructor(private supabaseService: SupabaseService, @Inject(MAT_DIALOG_DATA) public data: any, private mapService: MapService) {
    console.log(data);
    this.supabaseService.getPrestadorById(data.id).then(data => {
      if (data) {
        this.prestador = data[0];
        this.mapService.getDirections({lon: this.mapService.userLon(), lat: this.mapService.userLat()},{lon: this.prestador.lon, lat: this.prestador.lat});
      }
  });
  }


}
