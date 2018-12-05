import { Component } from '@angular/core';
import { UsuarioService } from './shared/usuario.service';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from './shared/usuario.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular7';
  private usuario:Usuario;
  constructor(private us:UsuarioService,private toastr: ToastrService,private _router: Router) { }
  
  ngOnInit() {
      this.us.formData = {
        codUsu : null,
        nomUsu : '',
        apePatUsu : '',
        apeMatUsu : '',
        dniUsu : '',
        celUsu : '',
        nickUsu : '',
        pwdUsu : '',
        fechaRegistroUsu : '',
        mailUsu : '',
      }
      this.usuario=this.us.formData;
  console.log("Estoy: "+this.usuario.nomUsu);
  }


  onLogin(){
    if(this.us.formData.codUsu!=null){
      this.toastr.warning('¡Ya ha ingresado al sistema!','ECOMMERCE');
    }else{
      this._router.navigate(['/login']);
    }
  }
 
  onSalir(){
    if(this.us.formData.codUsu==null){
      this.toastr.warning('¡No ha ingresado al sistema aún!','ECOMMERCE');
    }else{
      if(confirm('¿Está seguro de que desea salir?')){
      this.us.formData = {
        codUsu : null,
        nomUsu : '',
        apePatUsu : '',
        apeMatUsu : '',
        dniUsu : '',
        celUsu : '',
        nickUsu : '',
        pwdUsu : '',
        fechaRegistroUsu : '',
        mailUsu : '',
      }
      this.usuario=this.us.formData;
      this.toastr.success('¡Salida exitosa!','ECOMMERCE');
      this._router.navigate(['/home']);
    }}
  }

}
