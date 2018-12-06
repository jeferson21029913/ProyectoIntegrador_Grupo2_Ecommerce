import { Component, OnInit } from '@angular/core';
import { ItemService } from '../shared/item.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  constructor(private service : ItemService, private toastr : ToastrService, private _router: Router) { }

  ngOnInit() {
  }

  getImagen(codPro : number , auxImagen : number){
     return "http://localhost:56527/api/Producto/obtenerImagen?codPro="+codPro+"&aux="+auxImagen; 
    
  }

  indice : number ;

  onEliminar(numItem : number){
    this.indice = this.service.carrito.indexOf(this.service.carrito.find(x=>x.numItem == numItem));
    this.service.carrito.splice(this.indice , 1);
  }

  onSeguirComprando(){
    this._router.navigate(['/home']);
  }

  total : number = 0;

  getTotal(){
    for(let item of this.service.carrito){
        this.total += item.precioPro * item.canItem
    } 
    return this.total;
  }

}
