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
      codPro:'',
      descripcionPro:'',
      detallePro:'',
      precioPro:null,
      stockPro:null,
      codProdCat:null,
      codProdMar:null
    }
}

onSubmit(form:NgForm){
  console.log("entro al boton", form.value)
this.insertRecord(form);
}

insertRecord(form:NgForm){
this.service.postProducto(form.value).subscribe(res => {
  this.toastr.success('Inserted successfully','Producto - Registro')
  this.resetForm(form);
});
}
}
