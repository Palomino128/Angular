// src/app/app.ts
import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DesarrolladorMayusculaPipe } from './pipes/desarrollador-mayuscula-pipe';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, RouterLink, RouterLinkActive,
    CommonModule, FormsModule,
    DesarrolladorMayusculaPipe,
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {}
