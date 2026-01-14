import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // provee pipes nativos
import { SolPeruanoPipe } from '../../pipes/sol-peruano-pipe';

@Component({
  selector: 'app-pipes-demo',
  imports: [CommonModule, SolPeruanoPipe],
  standalone: true,
  templateUrl: './pipes-demo.html',
  styleUrl: './pipes-demo.css',
})
export class PipesDemoComponent {
  // Datos de ejemplo
  hoy = new Date();                     // date
  titulo = 'bienvenido a angular s8';   // titlecase / uppercase / lowercase
  precio = 12345.6789;                  // currency / number
  avance = 0.357;                       // percent
  frutas = ['manzana','naranja','plátano','fresa','uva']; // slice
  persona = { nombre: 'Omar', ciudad: 'Arequipa', edad: 21 }; // json / keyvalue
}
