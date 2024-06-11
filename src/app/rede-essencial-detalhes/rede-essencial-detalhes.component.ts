import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialog,
  MatDialogRef,
  MatDialogActions,
  MatDialogClose,
  MatDialogTitle,
  MatDialogContent
} from '@angular/material/dialog';

@Component({
  selector: 'app-rede-essencial-detalhes',
  standalone: true,
  imports: [MatButtonModule, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent],
  templateUrl: './rede-essencial-detalhes.component.html',
  styleUrl: './rede-essencial-detalhes.component.scss'
})
export class RedeEssencialDetalhesComponent {
  constructor(public dialogRef: MatDialogRef<RedeEssencialDetalhesComponent>) {}
}
