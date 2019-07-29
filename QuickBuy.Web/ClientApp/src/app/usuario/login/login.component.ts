import { Component, OnInit } from "@angular/core";
import { Usuario } from "../../nav-menu/model/usuario";
import { Router, ActivatedRoute } from "@angular/router";
import { UsuarioServico } from "../../servicos/usuario/usuario.servico";
import { error } from "util";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls:["./login.component.css"]
})
export class LoginComponent implements OnInit {
   
  public usuario;
  public returnUrl: string;
  public mensagem: string;

  constructor(private router: Router, private activateRouter: ActivatedRoute, private usuarioServico: UsuarioServico) {  
   
  }

  ngOnInit(): void {
    this.returnUrl = this.activateRouter.snapshot.queryParams['returnUrl'];
    this.usuario = new Usuario();
  }

  entrar() {

    this.usuarioServico.verficarUsuario(this.usuario)
      .subscribe(

        data => {
          // essa linha será executada em caso de execução sem erros
         // console.log(data);

          var usuarioRetorno: Usuario;
          usuarioRetorno = data;
          sessionStorage.setItem("usuario-autenticado", "1");
          sessionStorage.setItem("email-usuario", usuarioRetorno.email);

          if (this.returnUrl == null) {
            this.router.navigate(['/']);
          }
          else {
            this.router.navigate([this.returnUrl]);
          }
        },
        err => {
          console.log(err.error);
          this.mensagem = err.error;
        }

      );

   // if (this.usuario.email == "rodrigobarreto@.com.br" && this.usuario.senha == "abc") {

   //   sessionStorage.setItem("usuario-autenticado", "1");
   //   this.router.navigate([this.returnUrl]);

    }

  }
  

