//Uno de los Hooks más importantes es el componente OnInit

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  constructor() { }

  //Método que se ejecuta al cargar el componente
  ngOnInit(): void {
  }

}
