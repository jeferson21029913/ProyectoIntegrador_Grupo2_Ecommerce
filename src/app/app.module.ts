import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import{ FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { ProductoComponent } from './productos/producto/producto.component';
import { ProductosComponent } from './productos/productos.component';
import { ProductoListComponent } from './productos/producto-list/producto-list.component';
import { ProductoService } from './shared/producto.service';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UsuarioComponent } from './usuarios/usuario/usuario.component';
import { UsuarioListComponent } from './usuarios/usuario-list/usuario-list.component';
import { UsuarioService } from './shared/usuario.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductoComponent,
    ProductosComponent,
    ProductoListComponent,
    UsuariosComponent,
    UsuarioComponent,
    UsuarioListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ProductoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
