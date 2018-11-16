import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/shared/producto.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  constructor(private service: ProductoService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.service.formData = {
      codigo:null,
      descripcion:'',
      detalle:'',
      precio:null,
      stock:null,
      marca:null,
      categoria:null
    }

}
}