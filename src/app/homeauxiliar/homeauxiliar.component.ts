import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../shared/producto.service';
import { ToastrService } from 'ngx-toastr';
import { Producto } from '../shared/producto.model';
import { CategoriaService } from 'src/app/shared/categoria.service';
import { MarcaService } from 'src/app/shared/marca.service';
import { Categoria } from 'src/app/shared/categoria.model';
import { Marca } from 'src/app/shared/marca.model';
import { ItemService } from '../shared/item.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homeauxiliar',
  templateUrl: './homeauxiliar.component.html',
  styleUrls: ['./homeauxiliar.component.css']
})
export class HomeauxiliarComponent implements OnInit {

  constructor(private service:ProductoService,private cs:CategoriaService,private ms:MarcaService,private toastr:ToastrService , private is : ItemService , private _router: Router) { }

  ngOnInit() {
    this.service.refreshList();
    if(this.is.codigoProducto != 0){
      this.producto=this.service.list.find(x=>x.codPro==this.is.codigoProducto);
      this.cs.listarCategoria();
      this.ms.listarMarca();
    } else {
      this._router.navigate(['/home']);
    }
  }

  producto:Producto;
  imagenProducto:string="/assets/img/default-image.png";
  categoria:Categoria;
  marca:Marca;

  inicializarFormData(){
    this.is.formData = {
      numItem : null,
      codPro : null,
      descripcionPro : "",
      detallePro : "",
      precioPro : null,
      imgPro : "",
      categoria : "",
      marca : "",
      canItem : null,
      auxImagen : null
    }
  }

  getImagen(){
    this.imagenProducto= "http://localhost:56527/api/Producto/obtenerImagen?codPro="+this.producto.codPro+"&aux="+this.service.auxImagen;
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

  catalogo(){
    this.is.cantidad = null;
    this._router.navigate(['/home']);
  }

  OnSubmit(){
    this.inicializarFormData();
    this.is.formData.codPro = this.producto.codPro;
    this.is.formData.descripcionPro = this.producto.descripcionPro;
    this.is.formData.detallePro = this.producto.detallePro;
    this.is.formData.precioPro = this.producto.precioPro;
    this.is.formData.imgPro = this.producto.imgPro;
    this.is.formData.categoria = this.cs.categorias.find(x=>x.codProdCat==this.producto.codProdCat).nomProdCat;
    this.is.formData.marca = this.ms.marcas.find(x=>x.codProdMar==this.producto.codProdMar).nomProdMar;
    this.is.formData.canItem = this.is.cantidad;
    this.is.formData.auxImagen = this.service.auxImagen;
    this.is.controlItem ++ ;
    this.is.formData.numItem = this.is.controlItem;
    this.is.carrito.push(this.is.formData);  
    this.is.cantidad = null ;
    this._router.navigate(['/carrito']);
  }
}
