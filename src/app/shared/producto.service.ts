import { Injectable } from '@angular/core';
import { Producto } from './producto.model';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  

  formData: Producto
  readonly rootURL = "http://localhost:56527/api/"

  constructor(private http:HttpClient) { }

  postProducto(formData: Producto){
    return this.http.post(this.rootURL+'Producto/crearProducto',formData);
  }
}
