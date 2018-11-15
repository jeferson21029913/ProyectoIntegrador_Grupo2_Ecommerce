import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../shared/producto.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  constructor(private service:ProductoService) { }

  ngOnInit() {
  }

}
