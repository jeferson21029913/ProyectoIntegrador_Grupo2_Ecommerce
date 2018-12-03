import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr'
import { Usuario } from '../../shared/usuario.model';
import { UsuarioService } from '../../shared/usuario.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario: Usuario;
  
  //emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  constructor(private us:UsuarioService,private toastr: ToastrService) { }

  ngOnInit() {
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

  onRegistrarse(form : NgForm){
    this.insertRecord(form)
  }

  insertRecord(form : NgForm){
    if(confirm('¿Esta seguro que desea registrar este usuario?')){
      this.us.postUsuario(form.value).subscribe(res => {
        this.toastr.success('¡Registro exitoso!','ECOMMERCE');
        this.resetForm(form);
        this.us.refreshList();
      })}
  }



}
