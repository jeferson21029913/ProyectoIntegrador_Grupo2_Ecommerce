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
<<<<<<< HEAD
import { MarcaService } from './shared/marca.service';
import { CategoriaService } from './shared/categoria.service';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { UsuarioComponent } from './usuario/usuario.component';
import { LoginComponent } from './usuario/login/login.component';
import { RegistroComponent } from './usuario/registro/registro.component';
import { HomeComponent } from './home/home.component';
import { UsuarioService } from './shared/usuario.service';

@NgModule({
  declarations: [
    AppComponent,ProductoComponent,
    ProductosComponent,ProductoListComponent, UsuarioComponent, LoginComponent, RegistroComponent, HomeComponent],
=======
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
>>>>>>> 380d61af74dc0fb3f62921fa7daf82f07748b8d4
  imports: [
    BrowserModule, MatSelectModule, FormsModule, HttpClientModule,BrowserAnimationsModule,ToastrModule.forRoot(),
    MatFormFieldModule,MatSelectModule
  ],
<<<<<<< HEAD
  providers: [[MarcaService],[CategoriaService],[ProductoService],[UsuarioService]],
=======
  providers: [ProductoService , EmpleadoService],
>>>>>>> 380d61af74dc0fb3f62921fa7daf82f07748b8d4
  bootstrap: [AppComponent]
})
export class AppModule { }
