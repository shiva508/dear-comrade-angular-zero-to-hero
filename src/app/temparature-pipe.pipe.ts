import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temparaturePipe',
  standalone: true,
})
export class TemparaturePipePipe implements PipeTransform {
  transform(
    value: string | number | null,
    inputType: 'cel' | 'fah',
    outputType?: 'cel' | 'fah'
  ): unknown {
    if (!value) {
      return value;
    }
    let val: number;

    if (typeof value === 'string') {
      val = parseFloat(value);
    } else {
      val = value;
    }
    let outputTemparature: number;
    if (inputType === 'cel' && outputType === 'fah') {
      outputTemparature = val * (9 / 5) + 32;
    } else if (inputType === 'fah' && outputType === 'cel') {
      outputTemparature = (val - 32) * (5 / 9);
    } else {
      outputTemparature = val;
    }
    let symbol: '°C' | '°F';
    if (!outputType) {
      symbol = inputType === 'cel' ? '°F' : '°C';
    } else {
      symbol = outputType === 'cel' ? '°C' : '°F';
    }
    return `${outputTemparature.toFixed(2)} ${symbol}`;
  }
}
