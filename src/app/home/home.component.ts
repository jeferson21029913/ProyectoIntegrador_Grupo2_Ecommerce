import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/shared/producto.service';
import { Producto } from 'src/app/shared/producto.model';
import { ToastrService } from 'ngx-toastr';
import { UsuarioService } from '../shared/usuario.service';
import { Usuario } from '../shared/usuario.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  usuario:Usuario;
  constructor(private service:ProductoService,private toastr:ToastrService,private us:UsuarioService) { }

  ngOnInit() {
    this.service.refreshList();
    console.log(this.us.formData);
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

  imagenProducto:string="/assets/img/default-image.png";

  getImagen(codPro:number){
    this.imagenProducto="http://localhost:56527/api/Producto/obtenerImagen?codPro="+codPro+"&aux="+this.service.auxImagen;
      return this.imagenProducto;
  }


}
