import { Component, OnInit } from '@angular/core';
import { PedidoService } from 'src/app/shared/pedido.service';
import { ToastrService } from 'ngx-toastr';
import { Pedido } from 'src/app/shared/pedido.model'
import { UsuarioService } from 'src/app/shared/usuario.service';
import { Usuario } from 'src/app/shared/usuario.model';
import { Router } from '@angular/router';
import { DetalleService } from '../shared/detalle.service';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {

  constructor(private service : PedidoService, private us:UsuarioService, private ds : DetalleService, private Toastr : ToastrService , private _router: Router) { }

  ngOnInit() {
    //this.service.refreshList();
    //this.us.refreshList();
  }

  

}
