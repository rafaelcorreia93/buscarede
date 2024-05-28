import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-search-nome-prestador',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './search-nome-prestador.component.html',
  styleUrl: './search-nome-prestador.component.scss'
})
export class SearchNomePrestadorComponent {
  nomePrestadorControl = new FormControl('');


}
