import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public title:String;
  public subtitle:String;
  public email:String;

  constructor() { 
    this.title = "Bryan Solares";
    this.subtitle = "Desarrollador Backend",
    this.email = "solares.josue@outlook.com"
  }

  ngOnInit(): void {
  }

}
