import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperature'
})
export class TemperaturePipe implements PipeTransform {
// transform prend une valeur numérique en entrée et renvoie un string. toFixed est utilisé pour arrondir la valeur numérique à une décimale, et la chaine de caractere est construite en concaténant la valeur avec le symbole °C 
  transform(value: number): string {
    const celsius = value.toFixed(1);
    return `${celsius}°C`;
  }
}
