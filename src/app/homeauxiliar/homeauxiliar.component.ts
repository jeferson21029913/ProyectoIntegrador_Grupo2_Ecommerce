import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../shared/producto.service';
import { ToastrService } from 'ngx-toastr';
import { Producto } from '../shared/producto.model';
import { CategoriaService } from 'src/app/shared/categoria.service';
import { MarcaService } from 'src/app/shared/marca.service';
import { Categoria } from 'src/app/shared/categoria.model';
import { Marca } from 'src/app/shared/marca.model';

@Component({
  selector: 'app-homeauxiliar',
  templateUrl: './homeauxiliar.component.html',
  styleUrls: ['./homeauxiliar.component.css']
})
export class HomeauxiliarComponent implements OnInit {

  constructor(private service:ProductoService,private cs:CategoriaService,private ms:MarcaService,private toastr:ToastrService) { }

  ngOnInit() {
    this.service.refreshList();
    this.producto=this.service.list.find(x=>x.codPro==2);
    this.service.formData=this.producto;
  }

  producto:Producto;
  imagenProducto:string="/assets/img/default-image.png";
  categoria:Categoria;
  marca:Marca;

  getImagen(codPro:number){
    this.imagenProducto= "http://localhost:56527/api/Producto/obtenerImagen?codPro="+codPro;
      return this.imagenProducto;
  }

  getCategoria(codProdCat:number){
    if(this.cs.categorias==null) return "Cargando";
    else {this.categoria = this.cs.categorias.find(x=>x.codProdCat==codProdCat);
    return this.categoria.nomProdCat;}
  }

  getMarca(codProdMar:number){
    if(this.ms.marcas==null) return "Cargando";
    else  {this.marca= this.ms.marcas.find(x=>x.codProdMar==codProdMar);
    return this.marca.nomProdMar;}
  }


}