import { Injectable } from '@angular/core';
import { Producto } from './producto.model';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  

  formData: Producto
  list:Producto[];
  readonly rootURL = "http://localhost:56527/api/"

  constructor(private http:HttpClient) { }

  postProducto(formData: Producto){
    return this.http.post(this.rootURL+'Producto/crearProducto',formData);
  }

  refreshList(){
    this.http.get(this.rootURL+'Producto/listarProducto').toPromise().then(res=>
      this.list = res as Producto[])
  }

  putProducto(formData: Producto){
    return this.http.post(this.rootURL+'Producto/actualizarProducto',formData);
  }

  deleteProducto(formData: Producto){
    return this.http.post(this.rootURL+'Producto/eliminarProducto',formData);
  }
}
