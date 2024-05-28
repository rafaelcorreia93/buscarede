import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupabaseService } from '../supabase.service';
import {FormBuilder, FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Observable} from 'rxjs';
import {startWith, map} from 'rxjs/operators';
import {AsyncPipe} from '@angular/common';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

type Plano = {
  nome: string;
  codigo: string;
};

type GrupoPlano = {
  nome: string;
  icon: string;
  plano: Plano[]
};

export const _filter = (opt: Plano[], value: string): Plano[] => {
  const filterValue = value.toLowerCase();

  return opt.filter(item => item.nome.toLowerCase().includes(filterValue));
};

@Component({
  selector: 'app-seleciona-plano',
  standalone: true,
  imports: [CommonModule, FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    AsyncPipe,],
  templateUrl: './seleciona-plano.component.html',
  styleUrl: './seleciona-plano.component.scss',
})

export class SelecionaPlanoComponent implements OnInit {
  // Grupo
  planoForm = this._formBuilder.group({
    planoGroup: '',
  });
  planoGroup: GrupoPlano[] | undefined;
  loading = true;
  planoGroupOptions!: Observable<GrupoPlano[]>;
  planoSelecionado!: Plano;

  constructor(private _formBuilder: FormBuilder, private supabaseService: SupabaseService) {}

  ngOnInit(): void {
    this.supabaseService.getGrupoPlanos().then(data => {
      this.planoGroup = data;
      this.loading = false;
      this.planoGroupOptions = this.planoForm.get('planoGroup')!.valueChanges.pipe(
        startWith(''),
        map(value => this._filterGroup(value || '')),
      );
    });
  }

  private _filterGroup(value: string): GrupoPlano[] {
    if (value && typeof value == 'string') {
      return this.planoGroup!
        .map(group => ({nome: group.nome, plano: _filter(group.plano, value), icon: group.icon}))
        .filter(group => group.plano.length > 0);
    }

    return this.planoGroup!;
  }

  getOptionText(option: Plano) {
    return option.nome;
  }

  selectPlan(value: Plano) {
    this.planoSelecionado = value;
  }
}
