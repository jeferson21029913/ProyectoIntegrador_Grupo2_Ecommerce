import { Component,ElementRef  } from '@angular/core';
import { UsuarioService } from './shared/usuario.service';
import { useAnimation } from '@angular/animations';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from './shared/usuario.model';
//import { NgForm } from '@angular/forms';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular7';
  private usuario:Usuario;
  constructor(private us:UsuarioService,private toastr: ToastrService) { }
  
  @ViewChild('mantenimiento') variableMantenimiento: ElementRef;

  ngOnInit() {
    if(this.us.formData==null){
      this.us.formData = {
        codUsu : null,
        nomUsu : '',
        apePatUsu : '',
        apeMatUsu : '',
        dniUsu : '',
        celUsu : '',
        nickUsu : '',
        pwdUsu : '',
        fechaRegistroUsu : '',
        mailUsu : '',
      }
      this.usuario=this.us.formData;
    }else{
      this.usuario=this.us.formData;
      console.log("Primero");
      console.log(this.usuario)
      if(this.usuario.codUsu==1){
        console.log("Entró");
        this.variableMantenimiento.nativeElement.css("visibility","visible");
      }else{
        console.log("No entró");
      }
    }
  console.log("Estoy: "+this.usuario.nomUsu);
  }

  onSalir(){
    /*if(this.usuario.nickUsu==''){
      this.toastr.warning('¡No ha ingresado al sistema aún!','ECOMMERCE');
    }else{
      this.us.formData = {
        codUsu : null,
        nomUsu : '',
        apePatUsu : '',
        apeMatUsu : '',
        dniUsu : '',
        celUsu : '',
        nickUsu : '',
        pwdUsu : '',
        fechaRegistroUsu : '',
        mailUsu : '',
      }
      this.usuario=this.us.formData;
      this.toastr.success('¡Salida exitosa!','ECOMMERCE');
    }*/
    if(this.us.formData.nickUsu==''){
      this.toastr.warning('¡No ha ingresado al sistema aún!','ECOMMERCE');
    }else{
      if(confirm('¿Está seguro de que desea salir?')){
      this.us.formData = {
        codUsu : null,
        nomUsu : '',
        apePatUsu : '',
        apeMatUsu : '',
        dniUsu : '',
        celUsu : '',
        nickUsu : '',
        pwdUsu : '',
        fechaRegistroUsu : '',
        mailUsu : '',
      }
      this.usuario=this.us.formData;
      this.toastr.success('¡Salida exitosa!','ECOMMERCE');
    }}
  }
/*
  resetForm(form? : NgForm){
    if(form != null)
      form.resetForm();
    this.us.formData = {
      codUsu : null,
      nomUsu : '',
      apePatUsu : '',
      apeMatUsu : '',
      dniUsu : '',
      celUsu : '',
      nickUsu : '',
      pwdUsu : '',
      fechaRegistroUsu : '',
      mailUsu : '',
    }
    this.usuario=this.us.formData;
  }
*/
}
