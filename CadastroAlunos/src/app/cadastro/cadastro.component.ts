import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  aluno: any = {};
  alunos: any[] = [];
  cadastrarAluno() {
    if (this.validarAluno(this.aluno)) {
      this.alunos.push(this.aluno); // Adiciona o aluno ao array
      console.log('Aluno cadastrado com sucesso:', this.aluno);
      this.aluno = {}; // Limpa os campos do formulário
    } else {
      console.error('Erro no cadastro do aluno. Preencha todos os campos.');
    }
  }

  validarAluno(aluno: any): boolean {
    return aluno.ra && aluno.nome && aluno.email && aluno.celular;
  }
}
