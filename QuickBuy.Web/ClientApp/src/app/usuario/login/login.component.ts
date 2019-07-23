import { Component, OnInit } from "@angular/core";
import { Usuario } from "../../nav-menu/model/usuario";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls:["./login.component.css"]
})
export class LoginComponent implements OnInit {
   
  public usuario;
  public returnUrl: string;

  constructor(private router: Router, private activateRouter: ActivatedRoute) {  
   
  }

  ngOnInit(): void {
    this.returnUrl = this.activateRouter.snapshot.queryParams['returnUrl'];
    this.usuario = new Usuario();
  }

  entrar() {

    if (this.usuario.email == "rodrigobarreto@.com.br" && this.usuario.senha == "abc") {

      sessionStorage.setItem("usuario-autenticado", "1");
      this.router.navigate([this.returnUrl]);

    }

  }
  
}
