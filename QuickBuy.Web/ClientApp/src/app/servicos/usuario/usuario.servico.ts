import { Injectable, inject, Inject } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Usuario } from "../../nav-menu/model/usuario";


@Injectable({
  providedIn:"root"
})
export class UsuarioServico {

  private baseURL: string;
  constructor(private http: HttpClient, @Inject('BASE_ URL') baseUrl: string) {

    this.baseURL = baseUrl;
  }

  public verficarUsuario(usuario: Usuario): Observable<Usuario> {

    const headers = new HttpHeaders().set('content-type', 'application/json');

    var body = {
      email: usuario.email,
      senha: usuario.senha
    }

    // this.baseURL = raiz do site que pode ser exemplo: http://www.quickbuy.com/
    return this.http.post<Usuario>(this.baseURL + "api/usuario/VerificarUsuario" , body, { headers });

  }
 




}
