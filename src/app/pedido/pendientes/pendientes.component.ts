import { Component, OnInit } from '@angular/core';
import { PedidoService } from 'src/app/shared/pedido.service';
import { Pedido } from 'src/app/shared/pedido.model';
import { UsuarioService } from 'src/app/shared/usuario.service';
import { DetalleService } from 'src/app/shared/detalle.service';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/shared/usuario.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-pendientes',
  templateUrl: './pendientes.component.html',
  styleUrls: ['./pendientes.component.css']
})
export class PendientesComponent implements OnInit {

  constructor(private ps: PedidoService, private us: UsuarioService,
    private ds : DetalleService,private _router: Router, private toastr: ToastrService) { }

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

  /*pedido:Pedido;
  this.pedido = {
    codBol: codBol,
    codEstBol: 1,
    codUsu:1,
    fechaBol:'',
    numTarjeta:'',
    precioTotal:0
  }*/

  onCambiarDeEstado(pedido:Pedido){
    pedido.codEstBol=1;
    this.updatePedido(pedido);
    this.ps.refreshList();
    this.cargarPedidosUsuario();
    /*pedido.codEstBol=1;
    this.ps.actualizarEstado(pedido);
    console.log(pedido.codEstBol);
    this.ps.refreshList();
    this.cargarPedidosUsuario();*/
  }

 
  updatePedido(pedido:Pedido) {
    if (confirm('¿Está seguro de que desea finalizar este pedido?')) {
      this.ps.actualizarEstado(pedido).subscribe(res => {
        this.toastr.success('El pedido se finalizó correctamente.', 'ECOMMERCE');
      });
    }
  }
 
  

}
