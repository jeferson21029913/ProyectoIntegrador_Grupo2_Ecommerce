import { Component, OnInit } from '@angular/core';
import { PedidoService } from 'src/app/shared/pedido.service';
import { UsuarioService } from 'src/app/shared/usuario.service';
import { Pedido } from 'src/app/shared/pedido.model';

@Component({
  selector: 'app-finalizados',
  templateUrl: './finalizados.component.html',
  styleUrls: ['./finalizados.component.css']
})
export class FinalizadosComponent implements OnInit {

  constructor(private ps : PedidoService , private us : UsuarioService) { }

  ngOnInit() {
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
