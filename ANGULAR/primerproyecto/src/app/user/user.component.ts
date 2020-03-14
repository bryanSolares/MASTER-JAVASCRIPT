import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  //Incluyendo necesidad de incluir un dato al momento de llamar a la etiqueta del componente
  @Input() nameUser;

  constructor() { }

  ngOnInit(): void {
  }

}
