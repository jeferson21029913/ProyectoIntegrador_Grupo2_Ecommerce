import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';
import { ItemService } from '../shared/item.service';
import { UsuarioService } from '../shared/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {

  profileForm: FormGroup;

  body = {
    numeroTarjeta:"",
    TipoTarjeta: 0,
    CodigoSeguridadTarjeta: "",
    TitularTarjeta: "",
    MesExpiracionTarjeta:"",
    AñoExpiracionTarjeta: "",
    MontoConsumir: 0
  };

  errorMsj = "";

  apiUrl = "http://localhost:56527/api/Pago/Validar";

  codBoleta;

  constructor(private http: HttpClient, private itemService: ItemService, private usuarioService: UsuarioService,
    private router: Router) { }

  ngOnInit() {
    this.profileForm = new FormGroup({
      tarjeta: new FormControl(''),
      titular: new FormControl(''),
      tipo: new FormControl(''),
      mes : new FormControl(''),
      año : new FormControl(''),
      codigoSeguridad : new FormControl('')
    });
    this.mostrarProd();
  }
/*
  posted() {
    const url = "http://localhost:56527/api/Pago/Validar";

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };

    this.http.post(url, JSON.stringify(this.body), httpOptions).subscribe(
      data => {
        console.log(data);
        if (!data['TransaccionCompleta']) {
          this.errorMsj = data['MensajeTransaccion']
        } else {
          this.errorMsj = "ok";
          this.cobrar();
        }
      }
    );
  }
  */
  cobrar(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    let total;
    this.itemService.carrito.forEach( (i) => {
      total =+ i.subtotalItem 
    } )
    const body = {
      codUsu : this.usuarioService.formData.codUsu,
      numTarjeta: this.body.numeroTarjeta,
      precioTotal: total,
      codEstBol: "2"
    };
    this.http.post("http://localhost:56527/api/venta/crearVenta", JSON.stringify(body), httpOptions)
      .subscribe( (data) => {
        console.log(data);
        this.codBoleta = data;
        this.registrarDetalle();
      });
  }

  registrarDetalle() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    this.itemService.carrito.forEach( (i) => {
      const body = {
        codBol : this.codBoleta,
        codProd: i.codPro,
        canProd: i.canItem,
        preProd: i.subtotalItem
      };
      this.http.post("http://localhost:56527/api/detalleventa/crearDetalleVenta", JSON.stringify(body), httpOptions)
      .subscribe( data => {
        console.log(data);
        if (data === "Detalle CREADO") {
          this.itemService.carrito = []; 
          this.itemService.total = 0;
          this.router.navigate(['/home']);
        }
      });
    } );
    
  }

  onSubmit() {
    this.body.numeroTarjeta = this.profileForm.value.tarjeta;
    this.body.TitularTarjeta = this.profileForm.value.titular;
    this.body.TipoTarjeta = this.profileForm.value.tipo;
    this.body.CodigoSeguridadTarjeta=this.profileForm.value.codigoSeguridad;
    this.body.MesExpiracionTarjeta=this.profileForm.value.mes;
    this.body.AñoExpiracionTarjeta=this.profileForm.value.año;

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };

    this.http.post(this.apiUrl, JSON.stringify(this.body), httpOptions).subscribe(
      data => {
        console.log(data);
        if (!data['TransaccionCompleta']) {
          this.errorMsj = data['MensajeTransaccion']
        } else {
          this.errorMsj = "ok";
          this.cobrar();
        }
      }
    );
  }
  mostrarProd() {
    console.log(this.itemService.carrito);
    console.log(this.usuarioService.formData)
  }
}
