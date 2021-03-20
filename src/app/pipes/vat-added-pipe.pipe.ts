import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vatAddedPipe'
})
export class VatAddedPipePipe implements PipeTransform {

  transform(value: number, rate: number): number {
    return value+(value*rate/100);
  }

}
