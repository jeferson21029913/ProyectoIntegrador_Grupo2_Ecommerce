import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from 'src/app/shared/empleado.service';
import { Empleado } from 'src/app/shared/empleado.model';
import { UsuarioService } from 'src/app/shared/usuario.service';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from 'src/app/shared/usuario.model';

@Component({
  selector: 'app-empleado-list',
  templateUrl: './empleado-list.component.html',
  styleUrls: ['./empleado-list.component.css']
})
export class EmpleadoListComponent implements OnInit {

  constructor(private service : UsuarioService,private toastr:ToastrService) { }

  ngOnInit() {
    //.service.formData = Object.assign({},emp);
    this.service.refreshList();
  }

  onDelete(usuario:Usuario) {
    console.log(usuario);
    if(confirm('¿Está seguro de que desea eliminar este usuario?')){
    this.service.deleteUsuario(usuario).subscribe(res=>{
      this.service.refreshList();
      this.toastr.success('El usuario se eliminó correctamente.','ECOMMERCE');
      this.service.formData.codUsu=null;
      this.service.formData.nomUsu='';
      this.service.formData.apePatUsu='';
      this.service.formData.apeMatUsu='';
      this.service.formData.dniUsu='';
      this.service.formData.celUsu='';
      this.service.formData.nickUsu='';
      this.service.formData.pwdUsu='';
      this.service.formData.fechaRegistroUsu='';
      this.service.formData.mailUsu='';
      this.service.controlEliminacion=1;
    });
  }}
}
