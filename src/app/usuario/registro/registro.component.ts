import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr'
import { Usuario } from '../../shared/usuario.model';
import { UsuarioService } from '../../shared/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario: Usuario;
  
  //emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  constructor(private us:UsuarioService,private toastr: ToastrService,private _router: Router) { }

  ngOnInit() {
    this.us.refreshList();
    this.resetForm();
    this.usuario=this.us.formData;
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
  }

  u:Usuario;
  onRegistrarse(form : NgForm){
    this.u=this.us.list.find(x=>x.nickUsu==this.usuario.nickUsu);
    console.log(this.u);
    if(this.u==null)
    {this.insertRecord(form);}
    else{
      this.toastr.warning('¡Nombre de usuario no disponible!','ECOMMERCE');
    }
  }

  insertRecord(form : NgForm){
    if(confirm('¿Está seguro de que desea registrarse?')){
      this.us.postUsuario(form.value).subscribe(res => {
        this.toastr.success('¡Registro exitoso!','ECOMMERCE');
        this.resetForm(form);
        this.us.refreshList();
      })}
  }

  catalogo(){
    this._router.navigate(['/home']);
  }



}
