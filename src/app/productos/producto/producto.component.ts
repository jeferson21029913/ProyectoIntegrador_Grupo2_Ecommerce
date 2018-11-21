import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/shared/producto.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  constructor(private service: ProductoService,private toastr:ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.service.formData = {
      codPro:null,
      descripcionPro:'',
      detallePro:'',
      precioPro:null,
      stockPro:null,
      imgPro:'',
      codProdCat:null,
      codProdMar:null
    }
}

onRegistrar(form:NgForm){
 this.insertRecord(form);
}

onActualizar(form:NgForm){
  this.updateRecord(form);
 }

/*onEliminar(form:NgForm){
  this.deleteRecord(form);
 }*/
//if(form.value.codPro==null) {this.insertRecord(form);}
//else {this.updateRecord(form);}

insertRecord(form:NgForm){
  if(confirm('¿Está seguro de que desea registrar este producto?')){
  this.service.postProducto(form.value).subscribe(res => {
  this.toastr.success('El producto se registró correctamente.','ECOMMERCE');
  this.resetForm(form);
  this.service.refreshList();
});}
}

updateRecord(form:NgForm){
  if(confirm('¿Está seguro de que desea actualizar este producto?')){
  this.service.putProducto(form.value).subscribe(res =>{
    this.toastr.success('El producto se actualizó correctamente.','ECOMMERCE');
    this.resetForm(form);
    this.service.refreshList();
  });}
}

/*deleteRecord(form:NgForm){
  if(confirm('¿Está seguro de que desea eliminar este producto?')){
    this.service.deleteProducto(form.value).subscribe(res =>{
    this.toastr.success('El producto se eliminó correctamente.','ECOMMERCE');
    this.resetForm(form);
    this.service.refreshList();
  });}
}
*/


}
