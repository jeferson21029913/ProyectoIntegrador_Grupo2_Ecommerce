import { Component, OnInit } from '@angular/core';
import { PedidoService } from 'src/app/shared/pedido.service';

@Component({
  selector: 'app-pendientes',
  templateUrl: './pendientes.component.html',
  styleUrls: ['./pendientes.component.css']
})
export class PendientesComponent implements OnInit {

  constructor(private ps : PedidoService) { }

  ngOnInit() {
  }

}
