import { Routes } from '@angular/router';

import { InicioComponent } from './pages/inicio/inicio';
import { NosotrosComponent } from './pages/nosotros/nosotros';
import { ServiciosComponent } from './pages/servicios/servicios';
import { ContactoComponent } from './pages/contacto/contacto';
import { PipesDemoComponent } from './pages/pipes-demo/pipes-demo';
import { FormulariosComponent } from './pages/formularios/formularios';
import { Formularios2Component } from './pages/formularios2/formularios2';

export const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'pipes', component: PipesDemoComponent },
  { path: 'formulario-template', component: FormulariosComponent },
  { path: 'formulario-reactivo', component: Formularios2Component },
  { path: '**', redirectTo: '' },
];