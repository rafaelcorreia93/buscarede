import { Component } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';

@Component({
  selector: 'app-select-atendimento-video',
  standalone: true,
  imports: [MatCardModule, MatCheckboxModule, FormsModule],
  templateUrl: './select-atendimento-video.component.html',
  styleUrl: './select-atendimento-video.component.scss'
})
export class SelectAtendimentoVideoComponent {
  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;
}
