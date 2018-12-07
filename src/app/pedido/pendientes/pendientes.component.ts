import { Component, OnInit } from '@angular/core';
import { PedidoService } from 'src/app/shared/pedido.service';
import { Pedido } from 'src/app/shared/pedido.model';
import { UsuarioService } from 'src/app/shared/usuario.service';

@Component({
  selector: 'app-pendientes',
  templateUrl: './pendientes.component.html',
  styleUrls: ['./pendientes.component.css']
})
export class PendientesComponent implements OnInit {

  constructor(private ps: PedidoService, private us: UsuarioService) { }

  ngOnInit() {
    this.pedidosUsuario = [];
    this.ps.refreshList();
    if (this.ps.list != null) {
      this.cargarPedidosUsuario();
    }
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
