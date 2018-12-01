import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/shared/producto.service';
import { Producto } from 'src/app/shared/producto.model';
import { ToastrService } from 'ngx-toastr';
import { CategoriaService } from 'src/app/shared/categoria.service';
import { MarcaService } from 'src/app/shared/marca.service';
import { Categoria } from 'src/app/shared/categoria.model';
import { Marca } from 'src/app/shared/marca.model';


@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.css']
})
export class ProductoListComponent implements OnInit {

  constructor(private service:ProductoService,private cs:CategoriaService,private ms:MarcaService, private toastr:ToastrService) {
     }

    //producto:Producto;
imagenProducto:string="/assets/img/default-image.png";
categoria:Categoria;
marca:Marca;
  ngOnInit() {
    this.cs.listarCategoria();
    this.ms.listarMarca();
    this.service.refreshList();
  }

  populateForm(producto:Producto){
    this.service.formData=Object.assign({},producto);
    this.service.control=0;
  }

  onDelete(producto:Producto){
    if(confirm('¿Está seguro de que desea eliminar este producto?')){
    this.service.deleteProducto(producto).subscribe(res=>{
      this.service.refreshList();
      this.toastr.success('El producto se eliminó correctamente.','ECOMMERCE');
      this.service.formData.codPro=null;
      this.service.formData.imgPro='';
      this.service.formData.descripcionPro='';
      this.service.formData.detallePro='';
      this.service.formData.precioPro=null;
      this.service.formData.stockPro=null;
      this.service.formData.codProdMar= null;
      this.service.formData.codProdCat=null;
      this.service.controlEliminacion=1;
    });
  }}

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

 
