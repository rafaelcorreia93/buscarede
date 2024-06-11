import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RedeEssencialDetalhesComponent } from '../rede-essencial-detalhes/rede-essencial-detalhes.component';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-search-rede-essencial',
  standalone: true,
  imports: [MatCardModule, MatCheckboxModule, FormsModule],
  templateUrl: './search-rede-essencial.component.html',
  styleUrl: './search-rede-essencial.component.scss'
})
export class SearchRedeEssencialComponent {
  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;
  constructor(public dialog: MatDialog) {}
  redeEssencial() {
    this.dialog.open(RedeEssencialDetalhesComponent, {
      width: '60%',
    });
  }

}
