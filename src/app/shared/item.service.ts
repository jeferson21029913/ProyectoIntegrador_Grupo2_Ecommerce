import { Injectable } from '@angular/core';
import { Item } from './item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  codigoProducto : number = 0;
  formData : Item ;
  cantidad : number;
  readonly rootURL = "http://localhost:56527/api/";
  //countItem : number = 0;
  controlItem : number = 0;
  total:number=0;

  carrito : Item[] = [];
  
  constructor() { }

  
}
