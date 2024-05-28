import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';
import { SupabaseService } from '../supabase.service';
import { CommonModule } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import Utils from '../../utils';

type Procedimento = {
  nome: string;
  codigo: string;
};

@Component({
  selector: 'app-seleciona-procedimento',
  standalone: true,
  imports: [CommonModule, MatAutocompleteModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './seleciona-procedimento.component.html',
  styleUrl: './seleciona-procedimento.component.scss'
})
export class SelecionaProcedimentoComponent {
  procedimentoControl = new FormControl('');
  procedimento: Procedimento[] | undefined;
  filteredOptions!: Observable<Procedimento[]>;
  selectedProcedimento!: Procedimento;

  constructor(private supabaseService: SupabaseService) {}

  ngOnInit(): void {
    this.supabaseService.getProcedimento().then(data => {
      this.procedimento = data;
      this.filteredOptions = this.procedimentoControl!.valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value || '')),
      );
    });
  }

  private _filter(value: string): Procedimento[] {
    if(value && typeof value == 'string') {
      const filterValue = value.toLowerCase();

      return this.procedimento!.filter(procedimento => procedimento.nome.toLowerCase().includes(filterValue));
    }
    return this.procedimento!;
  }

  displayOpt(option: Procedimento) {
    return Utils.getOptionText(option, 'nome');
  }

  selectProcedimento(value: Procedimento) {
    this.selectedProcedimento = value;
  }

}
