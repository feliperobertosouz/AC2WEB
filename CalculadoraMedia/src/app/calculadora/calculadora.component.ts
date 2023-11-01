import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {

  resultado: string="";
  ac1: number=0;
  ac2: number=0;
  ag: number=0;
  af: number=0;

  calcularMedia() {
    
    let mediaFinal = (this.ac1 * 0.15) + (this.ac2 * 0.30) + (this.ag * 0.10) + (this.af * 0.45);

    
    if (mediaFinal >= 5) {
      this.resultado = "Aprovado com média " + mediaFinal;
    } else {
      this.resultado = "Reprovado com média " + mediaFinal;
    }
  }
}
