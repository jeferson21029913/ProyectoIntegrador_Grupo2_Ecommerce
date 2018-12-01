import { Injectable } from '@angular/core';
import { Marca } from './marca.model';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MarcaService {

  marcas:Marca[];
  readonly rootURL = "http://localhost:56527/api/";
  constructor(private http:HttpClient) { }

  listarMarca(){
    this.http.get(this.rootURL+'MarcaProd/listarComboMarcaProd').toPromise().then(res=>
      this.marcas = res as Marca[]);
  }

}
