import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from 'src/app/shared/empleado.service';
import { Empleado } from 'src/app/shared/empleado.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-empleado-list',
  templateUrl: './empleado-list.component.html',
  styleUrls: ['./empleado-list.component.css']
})
export class EmpleadoListComponent implements OnInit {

  constructor(private service : EmpleadoService,private toastr:ToastrService) { }

  ngOnInit() {
    //.service.formData = Object.assign({},emp);
    
  }

  onDelete(emp : Empleado){
    /*if(confirm('¿Está seguro de que desea eliminar este producto?')){
      this.service.deleteEmpleado(emp).subscribe(res=>{
        this.service.refreshList();
        this.toastr.success('El producto se eliminó correctamente.','ECOMMERCE');
      });
    }*/
  }

}
