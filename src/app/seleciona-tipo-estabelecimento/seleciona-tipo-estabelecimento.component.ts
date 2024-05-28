import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SupabaseService } from '../supabase.service';
import { Observable, map, startWith } from 'rxjs';
import Utils from '../../utils';

type TipoEstabelecimento = {
  nome: string;
  order: number;
};

export const _filter = (opt: TipoEstabelecimento[], value: string): TipoEstabelecimento[] => {
  const filterValue = value.toLowerCase();

  return opt.filter(estabelecimento => estabelecimento.nome.toLowerCase().includes(filterValue));
};

@Component({
  selector: 'app-seleciona-tipo-estabelecimento',
  standalone: true,
  imports: [CommonModule, FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,],
  templateUrl: './seleciona-tipo-estabelecimento.component.html',
  styleUrl: './seleciona-tipo-estabelecimento.component.scss'
})
export class SelecionaTipoEstabelecimentoComponent {
  tipoEstabelecimentoControl = new FormControl('');
  tipoEstabelecimento: TipoEstabelecimento[] | undefined;
  filteredOptions!: Observable<TipoEstabelecimento[]>;
  selectedEstabelecimento!: TipoEstabelecimento;

  constructor(private supabaseService: SupabaseService) {}

  ngOnInit(): void {
    this.supabaseService.getTipoEstabelcimento().then(data => {
      this.tipoEstabelecimento = data;
      this.filteredOptions = this.tipoEstabelecimentoControl!.valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value || '')),
      );
    });
  }

  private _filter(value: string): TipoEstabelecimento[] {
    if(value && typeof value == 'string') {
      const filterValue = value.toLowerCase();

      return this.tipoEstabelecimento!.filter(estabelecimento => estabelecimento.nome.toLowerCase().includes(filterValue));
    }
    return this.tipoEstabelecimento!;
  }

  displayOpt(option: TipoEstabelecimento) {
    return Utils.getOptionText(option, 'nome');
  }

  selectEstabelecimento(value: TipoEstabelecimento) {
    this.selectedEstabelecimento = value;
  }
}
