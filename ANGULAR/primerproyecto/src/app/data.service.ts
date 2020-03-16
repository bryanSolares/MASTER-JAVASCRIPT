import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Post } from "./post";

@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor(private httpCliente: HttpClient) {}

  obtenerDatos() {
    return this.httpCliente.get<Post[]>(
      "https://jsonplaceholder.typicode.com/posts"
    );
  }
}
