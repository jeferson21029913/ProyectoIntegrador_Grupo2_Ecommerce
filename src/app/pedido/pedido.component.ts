import { Component, OnInit } from '@angular/core';
import { PedidoService } from 'src/app/shared/pedido.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {

  constructor(private service : PedidoService, private Toastr : ToastrService) { }

  ngOnInit() {
  this.service.refreshList();
  }

}
