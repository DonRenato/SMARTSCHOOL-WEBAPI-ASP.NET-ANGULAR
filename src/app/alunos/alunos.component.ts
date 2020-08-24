import { Component, OnInit } from '@angular/core';
import { Aluno } from '../models/Aluno';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  titulo = 'Alunos';
  alunoSelecionado: Aluno;

  alunos =[
    {id: 1 ,nome :"Marta", sobrenome:"Kent" ,telefone:"332243434"},
    {id: 2 ,nome :"Paula", sobrenome:"Isabela" ,telefone:"3323233"},
    {id: 3 ,nome :"Laura", sobrenome:"Antonia" ,telefone:"3326576"},
    {id: 4 ,nome :"Luiza", sobrenome:"Maria" ,telefone:"3322545454"},
    {id: 5 ,nome :"Lucas", sobrenome:"Machado" ,telefone:"33294930"},
    {id: 6 ,nome :"Pedro", sobrenome:"Alvares" ,telefone:"332324434"},
    {id: 7 ,nome :"Paulo", sobrenome:"José" ,telefone:"33228698"}
  ];

  alunoSelected(aluno: Aluno){
    this.alunoSelecionado = aluno;
  }

  voltar(){
    this.alunoSelecionado= null;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
