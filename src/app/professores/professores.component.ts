import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {
  titulo = 'Professores'
  professores =[
    {nome :"André"},
    {nome :"Tartanhar"},
    {nome :"Maristela"},
    {nome :"Juliana"},
    {nome :"Michele"},
    {nome :"Luiz"},
    {nome :"Leguth"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
