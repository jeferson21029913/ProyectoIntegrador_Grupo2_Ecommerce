import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/shared/producto.service';
import { Producto } from 'src/app/shared/producto.model';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.css']
})
export class ProductoListComponent implements OnInit {

  constructor(private service:ProductoService,private toastr:ToastrService) { }

  ngOnInit() {
    this.service.refreshList();
  }

  populateForm(producto:Producto){
    this.service.formData=Object.assign({},producto);
  }

  onDelete(producto:Producto){
    if(confirm('¿Está seguro de que desea eliminar este producto?')){
    this.service.deleteProducto(producto).subscribe(res=>{
      this.service.refreshList();
      this.toastr.success('El producto se eliminó correctamente.','ECOMMERCE');
    });
  }}

  }

 
