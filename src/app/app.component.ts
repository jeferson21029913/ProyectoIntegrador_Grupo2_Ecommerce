import { Component } from '@angular/core';
import { UsuarioService } from './shared/usuario.service';
import { useAnimation } from '@angular/animations';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from './shared/usuario.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular7';
  usuario:Usuario;

  constructor(private us:UsuarioService,private toastr: ToastrService) { }

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
    }
  console.log("Estoy: "+this.usuario.nomUsu);
  }

  onSalir(){
    if(this.usuario.nickUsu==''){
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
    }
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
