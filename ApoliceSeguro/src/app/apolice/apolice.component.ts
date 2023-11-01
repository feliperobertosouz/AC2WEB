import { Component } from '@angular/core';

@Component({
  selector: 'app-apolice',
  templateUrl: './apolice.component.html',
  styleUrls: ['./apolice.component.css']
})
export class ApoliceComponent {

  segurado = {
    nome: '',
    sexo: 'masculino',
    idade: 0,
    valorAutomovel: 0
  };
  apoliceCalculada = false;
  valorApolice: number=0;

  calcularApolice() {
    if (this.segurado.sexo === 'masculino') {
      if (this.segurado.idade <= 25) {
        this.valorApolice = this.segurado.valorAutomovel * 0.15;
      } else {
        this.valorApolice = this.segurado.valorAutomovel * 0.10;
      }
    } else {
      this.valorApolice = this.segurado.valorAutomovel * 0.08;
    }

    this.apoliceCalculada = true;
  }

}
