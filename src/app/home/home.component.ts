import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/shared/producto.service';
import { Producto } from 'src/app/shared/producto.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service:ProductoService,private toastr:ToastrService) { }

  ngOnInit() {
    this.service.refreshList();
  }

  imagenProducto:string="/assets/img/default-image.png";

  getImagen(codPro:number){
    this.imagenProducto= "http://localhost:56527/api/Producto/obtenerImagen?codPro="+codPro;
      return this.imagenProducto;
  }


}
