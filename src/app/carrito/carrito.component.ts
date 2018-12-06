import { Component, OnInit } from '@angular/core';
import { ItemService } from '../shared/item.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  constructor(private service : ItemService, private toastr : ToastrService) { }

  ngOnInit() {
  }

}
