import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Pipe({
  name: 'solPeruano',
  standalone: true,
  pure: true,
})

export class SolPeruanoPipe implements PipeTransform {
  // Usamos CurrencyPipe para respetar agrupaciones y decimales del locale
  private currency = new CurrencyPipe('es-PE');

  transform(
    value: number | string | null | undefined,
    digits: string = '1.2-2',
    symbol: 'symbol' | 'symbol-narrow' | 'code' = 'symbol-narrow'
  ): string | null {
    if (value === null || value === undefined || value === '') return null;
    // 'PEN' = Sol peruano
    return this.currency.transform(Number(value), 'PEN', symbol, digits, 'es-PE');
  }
}
