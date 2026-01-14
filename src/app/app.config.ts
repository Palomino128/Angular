import { ApplicationConfig, LOCALE_ID, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// 👇 Registrar locale de Perú
import { registerLocaleData } from '@angular/common';
import localeEsPe from '@angular/common/locales/es-PE';
registerLocaleData(localeEsPe); // habilita formatos es-PE (fechas, moneda, números)

// Importar tus componentes y pipes
import { FormulariosComponent } from './pages/formularios/formularios';
import { Formularios2Component } from './pages/formularios2/formularios2';
import { FormateaNumerosPipe } from './pipes/formatea-numeros.pipe';
import { FormateaFechaPipe } from './pipes/formatea-fecha.pipe';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    importProvidersFrom(
      CommonModule,          // Para *ngIf, *ngFor
      FormsModule,           // Para formularios template-driven [(ngModel)]
      ReactiveFormsModule    // Para formularios reactivos [formGroup]
    ),
    
    // 👇 Forzar locale por defecto a es-PE
    { provide: LOCALE_ID, useValue: 'es-PE' },
    
    // Registrar componentes y pipes
    FormulariosComponent,
    Formularios2Component,
    FormateaNumerosPipe,
    FormateaFechaPipe
  ],
};


