import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { ProductoComponent } from './productos/producto/producto.component';
import { ProductosComponent } from './productos/productos.component';
import { ProductoListComponent } from './productos/producto-list/producto-list.component';
import { ProductoService } from './shared/producto.service';
import { EmpleadosComponent } from './empleados/empleados.component';
import { EmpleadoComponent } from './empleados/empleado/empleado.component';
import { EmpleadoListComponent } from './empleados/empleado-list/empleado-list.component';
import { EmpleadoService } from './shared/empleado.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductoComponent,
    ProductosComponent,
    ProductoListComponent,
    EmpleadosComponent,
    EmpleadoComponent,
    EmpleadoListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [ProductoService , EmpleadoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
