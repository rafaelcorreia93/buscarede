import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';
import { SupabaseService } from '../supabase.service';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import Utils from '../../utils';
import { CommonModule } from '@angular/common';

type Especialidade = {
  nome: string;
};

@Component({
  selector: 'app-seleciona-especialidade',
  standalone: true,
  imports: [CommonModule, MatAutocompleteModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './seleciona-especialidade.component.html',
  styleUrl: './seleciona-especialidade.component.scss'
})
export class SelecionaEspecialidadeComponent implements OnInit {
  especialiadeControl = new FormControl('');
  especialiade: Especialidade[] | undefined;
  filteredOptions!: Observable<Especialidade[]>;
  selectedEspecialidade!: Especialidade;

  constructor(private supabaseService: SupabaseService) {}

  ngOnInit(): void {
    this.supabaseService.getEspecialidade().then(data => {
      this.especialiade = data;
      this.filteredOptions = this.especialiadeControl!.valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value || '')),
      );
    });
  }

  private _filter(value: string): Especialidade[] {
    if(value && typeof value == 'string') {
      const filterValue = value.toLowerCase();

      return this.especialiade!.filter(estabelecimento => estabelecimento.nome.toLowerCase().includes(filterValue));
    }
    return this.especialiade!;
  }

  displayOpt(option: Especialidade) {
    return Utils.getOptionText(option, 'nome');
  }

  selectEspecialidade(value: Especialidade) {
    this.selectedEspecialidade = value;
  }

}
