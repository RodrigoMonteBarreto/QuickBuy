import { Component } from "@angular/core";
import { Usuario } from "../../nav-menu/model/usuario";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls:["./login.component.css"]
})
export class LoginComponent {


  public usuario;
 

  constructor() {
    this.usuario = new Usuario();
  }


  entrar() {

    if (this.usuario.email == "rodrigobarreto@.com.br" && this.usuario.senha == "abc") {
     
    }

  }
  
}
