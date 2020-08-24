import { Component, OnInit } from '@angular/core';
import { Professor } from '../models/Professor';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  profForm: FormGroup;
  titulo = 'Professores'
  profSelecionado: Professor;

  professores =[
    {id: 1 ,nome :"André", disciplina:"CPR"},
    {id: 2 ,nome :"Tartanhar", disciplina:"RDC" },
    {id: 3 ,nome :"Maristela", disciplina:"CEI" },
    {id: 4 ,nome :"Juliana", disciplina:"LPR" },
    {id: 5 ,nome :"Michele", disciplina:"LTT" },
    {id: 6 ,nome :"Luiz", disciplina:"DDW2" },
    {id: 7 ,nome :"Leguth", disciplina:"DSO1" },
  ];

  constructor(private fb: FormBuilder) {
    this.criarForm();
   }

  ngOnInit(): void {
  }

  criarForm(){
    this.profForm = this.fb.group({
      nome: ['',Validators.required],
      disciplina: ['', Validators.required]
    })
  }


  profSubmit(){
    console.log(this.profForm.value);
  }

  profSelected(prof: Professor){
    this.profSelecionado = prof;
    this.profForm.patchValue(prof);
  }

  voltar(){
    this.profSelecionado = null;
  }


}
