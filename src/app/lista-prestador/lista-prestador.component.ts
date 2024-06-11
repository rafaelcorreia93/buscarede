import { Component } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import { SupabaseService } from '../supabase.service';
import {MatTableModule} from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { PrestadorDetalheComponent } from '../prestador-detalhe/prestador-detalhe.component';
import { RedeEssencialDetalhesComponent } from '../rede-essencial-detalhes/rede-essencial-detalhes.component';
import { MapDirectionsComponent } from '../map-directions/map-directions.component';

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
  rede_essencial: boolean;
  lat: number;
  lon: number;
};

@Component({
  selector: 'app-lista-prestador',
  standalone: true,
  imports: [MatListModule, MatTableModule, MapDirectionsComponent],
  templateUrl: './lista-prestador.component.html',
  styleUrl: './lista-prestador.component.scss'
})
export class ListaPrestadorComponent {
  examplePrestador: Prestador = {
    id: 1111111111,
    nome: 'Prestador de Saúde Teste',
    contrato: 11111111,
    endereco: 'Alameda Santos',
    uf: 'SP',
    ddd: '11',
    telefone: '970482264',
    atendimento_video: true,
    site: 'www.prestador.com.br',
    email: 'prestador@domain.com',
    rede_essencial: false,
    lat: -23.5020295,
    lon: -46.62124645
  }
  prestadoresLista: Prestador[] = [];
  loading = true;
  displayedColumns: string[] = ['rede', 'nome', 'endereco', 'telefone', 'email', 'site', 'atendimento_video', 'mapa'];


  constructor(private supabaseService: SupabaseService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.supabaseService.getPrestador().then(data => {
        if (data) {
          console.log(data);

          this.prestadoresLista = data!;
        } else {
          this.prestadoresLista.push(this.examplePrestador);
        }
        this.loading = false;
    });
  }

  openDetail(id: number) {
    this.dialog.open(PrestadorDetalheComponent, {
      width: '60%',
      data: {id: id, localizacaoUser: ''}
    });
  }

}
