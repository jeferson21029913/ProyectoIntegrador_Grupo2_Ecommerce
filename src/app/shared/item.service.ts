import { Injectable } from '@angular/core';
import { Item } from './item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  codigoProducto : number = 0;
  formDataItem : Item ;
  readonly rootURL = "http://localhost:56527/api/";
  
  constructor() { }


}
