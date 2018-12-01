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
import { MarcaService } from './shared/marca.service';
import { CategoriaService } from './shared/categoria.service';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { UsuarioComponent } from './usuario/usuario.component';
import { LoginComponent } from './usuario/login/login.component';
import { RegistroComponent } from './usuario/registro/registro.component';
import { HomeComponent } from './home/home.component';
import { UsuarioService } from './shared/usuario.service';
import { HomeauxiliarComponent } from './homeauxiliar/homeauxiliar.component';

@NgModule({
  declarations: [
    AppComponent,ProductoComponent,
    ProductosComponent,ProductoListComponent, UsuarioComponent, LoginComponent, RegistroComponent, HomeComponent, HomeauxiliarComponent],
  imports: [
    BrowserModule, MatSelectModule, FormsModule, HttpClientModule,BrowserAnimationsModule,ToastrModule.forRoot(),
    MatFormFieldModule,MatSelectModule
  ],
  providers: [[MarcaService],[CategoriaService],[ProductoService],[UsuarioService]],
  bootstrap: [AppComponent]
})
export class AppModule { }
