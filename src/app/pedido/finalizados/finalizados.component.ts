import { Component, OnInit } from '@angular/core';
import { PedidoService } from 'src/app/shared/pedido.service';
import { UsuarioService } from 'src/app/shared/usuario.service';
import { Pedido } from 'src/app/shared/pedido.model';
import { Usuario } from 'src/app/shared/usuario.model';
import { DetalleService } from 'src/app/shared/detalle.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-finalizados',
  templateUrl: './finalizados.component.html',
  styleUrls: ['./finalizados.component.css']
})
export class FinalizadosComponent implements OnInit {

  constructor(private ps : PedidoService , private us : UsuarioService,
    private ds : DetalleService, private Toastr : ToastrService , private _router: Router) { }

  ngOnInit() {
    this.ds.controlNav=0;
    this.us.refreshList();
    this.pedidosUsuario = [];
    this.ps.refreshList();
    if (this.ps.list != null) {
      this.cargarPedidosUsuario();
    }
  }




  onVerDetalle (codBol : number) {
    this.ds.codigo = codBol;
    this._router.navigate(['/detalle']);
  }

  usuario : Usuario;
  getUsuario(codUsu:number){
    if(this.us.list==null) return "Cargando";
    else {this.usuario= this.us.list.find(x=>x.codUsu==codUsu);
    return this.usuario.nickUsu;}
  }



  pedidosUsuario: Pedido[];

  cargarPedidosUsuario() {
    if (this.us.formData.codUsu == 1) {
      this.pedidosUsuario = this.ps.list;
    } else {
      for (let pedido of this.ps.list) {
        if (pedido.codUsu == this.us.formData.codUsu) {
          this.pedidosUsuario.push(pedido);
        }
      }
    }
  }

}
