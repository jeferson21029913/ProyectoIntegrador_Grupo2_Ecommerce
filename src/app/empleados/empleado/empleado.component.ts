import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from 'src/app/shared/empleado.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  constructor(private service : EmpleadoService,private toastr : ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form? : NgForm){
    if(form != null)
      form.resetForm();
    this.service.formData = {
      codUsu : null,
      nomUsu : '',
      apePatUsu : '',
      apeMatUsu : '',
      dniUsu : '',
      celUsu : '',
      nickUsu : '',
      pwdUsu : '',
      fechaRegistroUsu : '',
      codTipoUsu : null,
      mailUsu : '',
    }
  }

  onRegistrar(form : NgForm){
    this.insertRecord(form)
  }

  onActualizar(form : NgForm){
    this.updateRecord(form)
  }

  insertRecord(form : NgForm){
    if(confirm('¿Esta seguro que desea registrar este usuario?')){
      this.service.postEmpleado(form.value).subscribe(res => {
        this.toastr.success('Inserto correctamente','ECOMMERCE')
        this.resetForm(form);
        this.service.refreshList();
      })
    }
  }

  updateRecord(form : NgForm){
    if(confirm('¿Esta seguro que desea actualizar este usuario?')){
      this.service.putEmpleado(form.value).subscribe(res => {
        this.toastr.success('Actualizo correctamente','ECOMMERCE')
        this.resetForm(form);
        this.service.refreshList();
      })
    }
  }

}
