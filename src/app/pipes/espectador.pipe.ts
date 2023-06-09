import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'espectador'
})
export class EspectadorPipe implements PipeTransform {

  transform(value: string ): string {
    if (value === "e"){
      return "Extranjero";
    }
    if (value === "l"){
      return "Local";
    }
    return "Desconocido";
  }

}
