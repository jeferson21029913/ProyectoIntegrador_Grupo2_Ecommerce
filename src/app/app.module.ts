import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { ProductoComponent } from './productos/producto/producto.component';
import { ProductosComponent } from './productos/productos.component';
import { ProductoListComponent } from './productos/producto-list/producto-list.component';
import { ProductoService } from './shared/producto.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductoComponent,
    ProductosComponent,
    ProductoListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ProductoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
