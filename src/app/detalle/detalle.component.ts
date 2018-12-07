import { Component, OnInit } from '@angular/core';
import { DetalleService } from 'src/app/shared/detalle.service';
import { ToastrService } from 'ngx-toastr';
import { ProductoService } from '../shared/producto.service';
import { Producto } from '../shared/producto.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  constructor(private service : DetalleService , private ps : ProductoService , private toastr : ToastrService , private _router: Router) { }

  ngOnInit() {
    this.service.refreshList();
    this.ps.refreshList();
  }

  producto : Producto;
  imagenProducto : String = "/assets/img/default-image.png";

  getImagen(codPro:number){
    this.imagenProducto = "http://localhost:56527/api/Producto/obtenerImagen?codPro="+codPro+"&aux="+this.ps.auxImagen;
    return this.imagenProducto;
  }

  getProducto(codProd:number){
    if(this.ps.list==null) return "Cargando";
    else {this.producto = this.ps.list.find(x=>x.codPro==codProd);
    return this.producto.descripcionPro}
  }

  onVerPedido(){
    if(this.service.controlNav==0){
    this._router.navigate(['/pendientes']);}
    else{
      this._router.navigate(['/finalizados']);
    }
  }

}
