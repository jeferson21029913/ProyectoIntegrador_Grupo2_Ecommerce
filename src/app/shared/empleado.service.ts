import { Injectable } from '@angular/core';
import { Empleado } from './empleado.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  formData : Empleado;
  list : Empleado[];
  readonly rootURL = "http://localhost:56527/api/"

  constructor(private http : HttpClient) { }

 /* postEmpleado(formData : Empleado){
    return this.http.post(this.rootURL+'Usuario/crearUsuario',formData)
  }

  refreshList(){
    this.http.get(this.rootURL+'Usuario/ListarUsuarios').toPromise().then(res => this.list = res as Empleado[])
  }

  putEmpleado(formData : Empleado){
    return this.http.put(this.rootURL+'Usuario/actualizarUsuario',formData);
  }

  deleteEmpleado(formData : Empleado){
    return this.http.post(this.rootURL+'Usuario/eliminarUsuario',formData);
  }*/

}
