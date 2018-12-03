import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductoComponent } from './productos/producto/producto.component';
import { ProductosComponent } from './productos/productos.component';
import { ProductoListComponent } from './productos/producto-list/producto-list.component';
import { ProductoService } from './shared/producto.service';
import { MarcaService } from './shared/marca.service';
import { CategoriaService } from './shared/categoria.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { UsuarioComponent } from './usuario/usuario.component';
import { LoginComponent } from './usuario/login/login.component';
import { RegistroComponent } from './usuario/registro/registro.component';
import { HomeComponent } from './home/home.component';
import { UsuarioService } from './shared/usuario.service';
import { HomealuxiliarComponent } from './homealuxiliar/homealuxiliar.component';
import {EmpleadoComponent } from './empleados/empleado/empleado.component';
import { HomeauxiliarComponent } from './homeauxiliar/homeauxiliar.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'usuario', component: UsuarioComponent },
  {path: 'productos', component: ProductosComponent },
  { path : 'empleados', component: EmpleadoComponent },
  //{ path : 'usuario', component: UsuarioComponent },
  { path : 'registro', component: UsuarioComponent,
  children:[{path:'',component:RegistroComponent }]},
  { path : 'login', component: UsuarioComponent,
  children:[{path:'',component:LoginComponent }]},
  { path : 'homealuxiliar', component: HomealuxiliarComponent },
  { path : 'homeauxiliar', component: HomeauxiliarComponent },
  //{ path : 'usuario', redirectTo:'/login', pathMatch : 'full'}
];

@NgModule({
  declarations: [
    AppComponent, ProductoComponent,
    ProductosComponent, EmpleadoComponent,
    ProductoListComponent, UsuarioComponent, LoginComponent, RegistroComponent, HomeComponent, HomeauxiliarComponent,HomealuxiliarComponent,
    UsuarioComponent],
  imports: [
    BrowserModule, MatSelectModule,
     FormsModule, HttpClientModule,
      BrowserAnimationsModule, ToastrModule.forRoot(),
    MatFormFieldModule, MatSelectModule,
    RouterModule.forRoot(appRoutes,{ useHash:true  }),
  ],
  providers: [[MarcaService], [CategoriaService], [ProductoService], [UsuarioService]],
  bootstrap: [AppComponent]
})
export class AppModule { }
