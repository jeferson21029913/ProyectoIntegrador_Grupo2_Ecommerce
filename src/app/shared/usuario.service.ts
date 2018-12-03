import { Injectable } from '@angular/core';
import { Usuario } from './usuario.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {


  formData : Usuario;
  list : Usuario[];
  readonly rootURL = "http://localhost:56527/api/";
  constructor(private http : HttpClient) { }

  postUsuario(formData : Usuario){
    console.log(formData);
    return this.http.post(this.rootURL+'Usuario/crearUsuario',formData);
    
  }

  refreshList(){
    this.http.get(this.rootURL+'Usuario/ListarUsuarios').toPromise().then(res => this.list = res as Usuario[])
  }


}
