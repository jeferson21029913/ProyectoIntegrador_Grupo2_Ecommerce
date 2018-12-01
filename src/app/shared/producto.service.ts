import { Injectable } from '@angular/core';
import { Producto } from './producto.model';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  
  formData: Producto;
  control:number=0;
  list:Producto[];
  actualizacion:number=0;
  controlEliminacion:number=0;
  //codProActualizado
  readonly rootURL = "http://localhost:56527/api/"

  constructor(private http:HttpClient) { }

  postProducto(formData: Producto,fileToUpload:File){
    const fd:FormData=new FormData();
    //fd.append("codPro",formData.codPro.toString());
    fd.append("descripcionPro",formData.descripcionPro);
    fd.append("detallePro",formData.detallePro);
    fd.append("precioPro",formData.precioPro.toString());
    fd.append("stockPro",formData.stockPro.toString());
    fd.append("archivoImagen",fileToUpload,fileToUpload.name);
    fd.append("codProdCat",formData.codProdCat.toString());
    fd.append("codProdMar",formData.codProdMar.toString());
    return this.http.post(this.rootURL+'Producto/crearProducto',fd); 
  }

  putProductoConImagen(formData: Producto,fileToUpload:File){
    //this.formData.controlActualizacion=formData.controlActualizacion;
    const fd:FormData=new FormData();
    fd.append("codPro",formData.codPro.toString());
    fd.append("descripcionPro",formData.descripcionPro);
    fd.append("detallePro",formData.detallePro);
    fd.append("precioPro",formData.precioPro.toString());
    fd.append("stockPro",formData.stockPro.toString());
    fd.append("archivoImagen",fileToUpload,fileToUpload.name);
    fd.append("codProdCat",formData.codProdCat.toString());
    fd.append("codProdMar",formData.codProdMar.toString());
    
    return this.http.post(this.rootURL+'Producto/actualizarProductoConImagen',
    fd);
  }

  refreshList(){
    this.http.get(this.rootURL+'Producto/listarProducto').toPromise().then(res=>
      this.list = res as Producto[]);
  }

  putProducto(formData: Producto){
    console.log(formData);
    return this.http.post(this.rootURL+'Producto/actualizarProducto',formData);
  }

  deleteProducto(formData: Producto){
    return this.http.post(this.rootURL+'Producto/eliminarProducto',formData);
  }
}
