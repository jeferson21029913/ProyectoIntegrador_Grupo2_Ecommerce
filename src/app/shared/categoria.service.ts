import { Injectable } from '@angular/core';
import { Categoria } from './categoria.model';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  categorias:Categoria[];
  //categoria:Categoria;
  readonly rootURL = "http://localhost:56527/api/";
  constructor(private http:HttpClient) { }

  listarCategoria(){
    this.http.get(this.rootURL+'CategoriaProd/listarComboCategoriasProd').toPromise().then(res=>
      this.categorias = res as Categoria[]);
  }

  /*obtenerCategoria(codProdCat:number){
   //return this.http.get(this.rootURL+'CategoriaProd/obtenerCategoria?codProdCat='+codProdCat) as Categoria;
   this.http.get(this.rootURL+'CategoriaProd/obtenerCategoria?codProdCat='+codProdCat).toPromise().then(c=>
    this.categoria = c as Categoria);
    //console.log(this.categoria);
   //console.log(this.http.get(this.rootURL+'CategoriaProd/obtenerCategoria?codProdCat='+codProdCat));
  }*/

}



