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
import { EmpleadoListComponent } from './empleados/empleado-list/empleado-list.component';
import { PedidoComponent } from './pedido/pedido.component';
import { DetalleComponent } from './detalle/detalle.component';
import { CarritoComponent } from './carrito/carrito.component';
import { HomeauxiliarComponent } from './homeauxiliar/homeauxiliar.component';
import { ItemService } from './shared/item.service';
import { DetalleService } from './shared/detalle.service';
import { PedidoService } from './shared/pedido.service';
import { TarjetaComponent } from './tarjeta/tarjeta.component';
import { ReactiveFormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'pedidos', component: PedidoComponent },
  { path: 'carrito', component: CarritoComponent },
  { path: 'detalle', component: DetalleComponent },
  { path: 'agregar', component: HomeauxiliarComponent },
  { path: 'usuario', component: UsuarioComponent },
  {path: 'productos', component: ProductosComponent },
  {path: 'usuarios', component: EmpleadoListComponent },
  { path : 'registro', component: UsuarioComponent,
  children:[{path:'',component:RegistroComponent }]},
  { path : 'login', component: UsuarioComponent,
  children:[{path:'',component:LoginComponent }]},
  //{ path : 'usuario', redirectTo:'/login', pathMatch : 'full'}
];

@NgModule({
  declarations: [
    AppComponent, ProductoComponent,
    ProductosComponent, EmpleadoListComponent,
    ProductoListComponent, UsuarioComponent, LoginComponent, RegistroComponent, HomeComponent,
    UsuarioComponent, PedidoComponent, DetalleComponent, CarritoComponent, HomeauxiliarComponent, TarjetaComponent],
  imports: [
    BrowserModule, MatSelectModule,
     FormsModule, HttpClientModule,
      BrowserAnimationsModule, ToastrModule.forRoot(),
    MatFormFieldModule, MatSelectModule,
    RouterModule.forRoot(appRoutes,{ useHash:true  }),
    ReactiveFormsModule
  ],
  providers: [[MarcaService], [CategoriaService], [ProductoService], [UsuarioService] , [ItemService],[DetalleService],[PedidoService]], 
  bootstrap: [AppComponent]
})
export class AppModule { }
