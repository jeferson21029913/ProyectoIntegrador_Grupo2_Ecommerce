import { Injectable } from '@angular/core';
import { Pedido } from './pedido.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class PedidoService {

  formData : Pedido;
  list : Pedido[];
  controlEliminacion = 0;
  readonly rootURL = "http://localhost:56527/api/";


  constructor(private http : HttpClient) { }

  refreshList(){
    
  }

}
