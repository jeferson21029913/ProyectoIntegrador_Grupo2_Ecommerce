import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';

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

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.profileForm = new FormGroup({
      tarjeta: new FormControl(''),
      titular: new FormControl(''),
      tipo: new FormControl(''),
      mes : new FormControl(''),
      año : new FormControl(''),
      codigoSeguridad : new FormControl('')
    });
  }

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
  cobrar(){

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
}
