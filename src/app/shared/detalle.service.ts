import { Injectable } from '@angular/core';
import { Detalle } from './detalle.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DetalleService {

  //formData : Detalle;
  codigo : number = 0;
  list : Detalle[];
  readonly rootURL = "http://localhost:56527/api/";

  constructor(private http : HttpClient) { }

  refreshList(){
    this.http.get(this.rootURL+'DetalleVenta/listarDetalleXVentas?codBol=1').toPromise().then(res => this.list = res as Detalle[])
  }

}
