import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/shared/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  constructor(private service : UsuarioService) { }

  ngOnInit() {
  }

}
