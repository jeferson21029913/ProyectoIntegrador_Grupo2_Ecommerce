import { Component, OnInit } from '@angular/core';
import { ItemService } from '../shared/item.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { FocusTrap } from '@angular/cdk/a11y';
import { ProductoService } from '../shared/producto.service';
import { UsuarioService } from '../shared/usuario.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  constructor(private service: ItemService, private toastr: ToastrService, private _router: Router,
    private ps: ProductoService,private us:UsuarioService) { }

  ngOnInit() {
    this.ps.refreshList();
  }

  getImagen(codPro: number, auxImagen: number) {
    return "http://localhost:56527/api/Producto/obtenerImagen?codPro=" + codPro + "&aux=" + auxImagen;

  }

  indice: number;

  onEliminar(numItem: number) {
    this.service.total-=this.service.carrito.find(x => x.numItem == numItem).subtotalItem;
   // this.service.total=Math.round(this.service.total)*100/100;
    this.indice = this.service.carrito.indexOf(this.service.carrito.find(x => x.numItem == numItem));
    this.service.carrito.splice(this.indice, 1);
  }

  onSeguirComprando() {
    this._router.navigate(['/home']);
  }

  acumulado: number = 0;
  cantidadTotal(codPro:number){
      this.acumulado=0;
      for (let item of this.service.carrito){
        if(item.codPro==codPro){
          this.acumulado += parseInt(item.canItem+"");
        }
      }
      return this.acumulado;
  }

  onPagar() {
    if(this.service.carrito.length==0){
      this.toastr.warning("No ha agregado ningún producto al carrito",'ECOMMERCE');}
      else{
    for(let producto of this.ps.list){
      if(producto.stockPro<this.cantidadTotal(producto.codPro)){
        this.toastr.warning("El stock del producto "+producto.descripcionPro+" es insuficiente.", 'ECOMMERCE');
        return;
      }
    }
    if(this.us.formData.codUsu==null){
      this.toastr.warning("¡Debe ingresar al sistema antes de pagar!",'ECOMMERCE');
    }else{
    this._router.navigate(['/pago']);
    }
  }
}
}