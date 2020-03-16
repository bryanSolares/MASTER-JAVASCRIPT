import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";

@Component({
  selector: "app-hola-mundo",
  templateUrl: "./hola-mundo.component.html",
  styleUrls: ["./hola-mundo.component.css"]
})
export class HolaMundoComponent implements OnInit {
  title: string = "Hola mundo";
  public users: string[] = [
    "bryan",
    "josue",
    "solares",
    "perez",
    "Jhon",
    "Bruce",
    "Banner"
  ];
  private activado: boolean = true;
  public name: string = "Bryan Bryan";
  age: number = 25;
  address: {
    calle: string;
    ciudad: string;
  };
  hobbies: string[];
  post = [];

  constructor(private service: DataService) {
    this.age = 25;
    this.address = {
      calle: "Calle Landivar",
      ciudad: "La Costeña"
    };
    this.hobbies = ["nadar", "leer", "escribir"];
    this.service.obtenerDatos().subscribe(data => {
      this.post = data;
    });
  }

  get obtenerEstado() {
    return this.activado;
  }

  diciendoHola(): void {
    alert("Hola");
  }

  eliminarUsuario(user: string): void {
    for (let index = 0; index < this.users.length; index++) {
      if (user == this.users[index]) {
        this.users.splice(index, 1);
      }
    }
  }

  agregarUsuario(nuevoUsuario: any): boolean {
    this.users.push(nuevoUsuario.value);
    nuevoUsuario.value = "";
    nuevoUsuario.focus();
    return false;
  }

  ngOnInit(): void {}
}
