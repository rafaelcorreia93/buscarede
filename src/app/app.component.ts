import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MapviewComponent } from './mapview/mapview.component';
import { SelecionaPlanoComponent } from './seleciona-plano/seleciona-plano.component';
import { SelecionaTipoEstabelecimentoComponent } from "./seleciona-tipo-estabelecimento/seleciona-tipo-estabelecimento.component";
import { SelecionaEspecialidadeComponent } from "./seleciona-especialidade/seleciona-especialidade.component";
import { SelecionaProcedimentoComponent } from "./seleciona-procedimento/seleciona-procedimento.component";
import { EnderecoComponent } from "./endereco/endereco.component";
import { SearchNomePrestadorComponent } from './search-nome-prestador/search-nome-prestador.component';
import { SelectAtendimentoVideoComponent } from './select-atendimento-video/select-atendimento-video.component';
import { ListaPrestadorComponent } from './lista-prestador/lista-prestador.component';
import { SearchRedeEssencialComponent } from './search-rede-essencial/search-rede-essencial.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MapviewComponent, SelecionaPlanoComponent, SelecionaTipoEstabelecimentoComponent,
    SelecionaEspecialidadeComponent, SelecionaProcedimentoComponent, EnderecoComponent, SearchNomePrestadorComponent, SelectAtendimentoVideoComponent,
ListaPrestadorComponent, SearchRedeEssencialComponent  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'})
export class AppComponent {
  title = 'buscarede';
}
