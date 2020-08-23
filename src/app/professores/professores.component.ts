import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {
  titulo = 'Professores'
  professores =[
    {id: 1 ,nome :"André", disciplina:"CPR"},
    {id: 2 ,nome :"Tartanhar", disciplina:"RDC" },
    {id: 3 ,nome :"Maristela", disciplina:"CEI" },
    {id: 4 ,nome :"Juliana", disciplina:"LPR" },
    {id: 5 ,nome :"Michele", disciplina:"LTT" },
    {id: 6 ,nome :"Luiz", disciplina:"DDW2" },
    {id: 7 ,nome :"Leguth", disciplina:"DSO1" },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
