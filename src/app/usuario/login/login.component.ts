import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UsuarioService } from 'src/app/shared/usuario.service';
import { Usuario } from 'src/app/shared/usuario.model';
import { NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario:Usuario;
  u:Usuario;

  constructor(private us:UsuarioService,private toastr: ToastrService,private _router: Router) { }

  ngOnInit() {
    this.resetForm();
    this.us.refreshList();
  }

  OnSubmit(){
    this.u=this.us.list.find(x=>x.nickUsu==this.usuario.nickUsu);
    if(this.u==null){
      this.toastr.warning('¡Ingreso inválido!','ECOMMERCE');
      this.resetForm();
    }else{
      if(this.u.pwdUsu!=this.usuario.pwdUsu){
        this.toastr.warning('¡Ingreso inválido!','ECOMMERCE');
        this.resetForm();
      }else{
        this.us.formData=this.u;
        this.toastr.success('¡Ingreso exitoso!','ECOMMERCE');
        this.usuario.nickUsu='';
        this.usuario.pwdUsu='';
        console.log(this.us.formData);
       // if(this.us.formData.codUsu==1) this.us.controlMantenimiento=1;
        this._router.navigate(['/home']);
      }
    }
  }

  catalogo(){
    this._router.navigate(['/home']);
  }

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

}
