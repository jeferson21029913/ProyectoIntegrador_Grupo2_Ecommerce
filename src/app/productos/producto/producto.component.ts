import { Component, OnInit, ElementRef } from '@angular/core';
import { ProductoService } from 'src/app/shared/producto.service';
import { CategoriaService } from 'src/app/shared/categoria.service';
import { MarcaService } from 'src/app/shared/marca.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ViewChild } from '@angular/core';



@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})

export class ProductoComponent implements OnInit {
  
  @ViewChild('imagenProducto') variableImagen: ElementRef;
  fileToUpload: File = null;
  constructor(private cs:CategoriaService,private ms:MarcaService,private service: ProductoService, 
    private toastr: ToastrService) {
  }

  imgUrl: string = "/assets/img/default-image.png";

 getImg() {
   if(this.service.control==0){
    if (this.service.formData.codPro!=null)
    {
      this.imgUrl="http://localhost:56527/api/Producto/obtenerImagen?codPro="+this.service.formData.codPro+"&aux="+this.service.auxImagen; 
  }
    else
    {this.imgUrl= "/assets/img/default-image.png";}
   }
   if(this.service.control==1){
    this.imgUrl=this.imgUrl;
  }
    return this.imgUrl;
  }

  ngOnInit() {
    this.resetForm();
    //this.cs.listarCategoria();
    //this.ms.listarMarca();
    this.service.refreshList();
  }

  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);
    this.service.control=1;
    if (this.fileToUpload != null) {
      var reader = new FileReader();
      reader.readAsDataURL(this.fileToUpload);
      reader.onload = (event: any) => {
        this.imgUrl = event.target.result;
      }
    } 
    else {
      this.imgUrl = "/assets/img/default-image.png";
    }  
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
      this.service.formData = {
        codPro: null,
        descripcionPro: '',
        detallePro: '',
        precioPro: null,
        stockPro: null,
        imgPro: '',
        codProdCat: null,
        codProdMar: null
      }
      this.variableImagen.nativeElement.value='';
      this.fileToUpload=null;
      this.imgUrl= "/assets/img/default-image.png";
  }
  
  onRegistrar(form: NgForm) {
    this.insertRecord(form);
  }

  onActualizar(form: NgForm) {
    if(this.service.formData.codPro==null){
      this.toastr.warning('¡No ha seleccionado ningún producto para actualizar!', 'ECOMMERCE');
    }else{
      console.log(this.fileToUpload);
      if(this.fileToUpload==null){
    this.updateRecord(form);}
    else{
      this.updateProductoConImagen(form);
    }
  }
  }

  insertRecord(form: NgForm) {
    if (confirm('¿Está seguro de que desea registrar este producto?')) {
      this.service.postProducto(form.value, this.fileToUpload).subscribe(res => {
        this.toastr.success('El producto se registró correctamente.', 'ECOMMERCE');
        this.resetForm(form);
        this.service.refreshList();
        this.imgUrl = "/assets/img/default-image.png";
        this.variableImagen.nativeElement.value='';
      });
    }
  }

  updateRecord(form: NgForm) {
    if (confirm('¿Está seguro de que desea actualizar este producto?')) {
      this.service.putProducto(form.value).subscribe(res => {
        this.toastr.success('El producto se actualizó correctamente.', 'ECOMMERCE');
        this.resetForm(form);
        this.service.refreshList();
      });
    }

    
  }

  updateProductoConImagen(form: NgForm) {
    if (confirm('¿Está seguro de que desea actualizar este producto?')) {
      this.service.putProductoConImagen(form.value, this.fileToUpload).subscribe(res => {
        this.toastr.success('El producto se actualizó correctamente.', 'ECOMMERCE');
        this.service.refreshList();
      this.resetForm(form);
      this.imgUrl = "/assets/img/default-image.png";
      this.service.auxImagen++;
      console.log(this.service.auxImagen);
      }); 
    }    
  }

controlar(form:NgForm){
  if(this.service.control==0){
    this.variableImagen.nativeElement.value='';
    this.fileToUpload=null;
  }
  if(this.service.controlEliminacion==1){
    //if(this.service.formData.codPro==null){
    this.resetForm(form);
  //}
    this.service.controlEliminacion=0;
  }
  //console.log(this.service.control);
  return "OK";
}

}
