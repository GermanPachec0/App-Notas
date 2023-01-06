import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup, FormBuilder,Validators} from '@angular/forms';
import { TokenDTO } from 'src/app/interface/tokenDTO';
import { MatSnackBar } from '@angular/material/snack-bar';

import { LoginServiceService } from 'src/app/services/login/login-service.service';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
token !: any;
formLogin = new FormGroup({
  username: new FormControl(''),
  password: new FormControl('',[Validators.required])
});
  constructor(
    public formulario:FormBuilder,
    private loginService: LoginServiceService,
    private snack:MatSnackBar,
    private router:Router
    ) { }

  ngOnInit(): void {
  }

  formSubmit(){
      if(this.validarForm()){
        this.enviarDatos();
      }
      
}

validarForm(){
  if(this.formLogin.value.username?.trim() == '' || this.formLogin.value.username?.trim() == null){
    this.snack.open('El nombre de usuario es requerido !!','Aceptar',{
      duration:3000
    })
    return false;
  }
  if(this.formLogin.value.password?.trim() == '' || this.formLogin.value.password?.trim() == null){
    this.snack.open('La contraseña es requerida !!','Aceptar',{
      duration:3000
    })
    return false;

}
return true;
}

redirectTo(){
  if(this.loginService.getUserRole() =='ROLE_USER'){
    this.router.navigate(['usuario']);
    this.loginService.loginStatusSubject.next(true);
  }
}

enviarDatos():any{
  console.log(this.formLogin.value)
  this.loginService.login(String(this.formLogin.value.username),String(this.formLogin.value.password)).subscribe((res) => {
    this.token = res;
    this.loginService.setToken(this.token);
    this.loginService.getCurrentUser().subscribe((user:any) =>{
    this.loginService.setUser(user);
    this.redirectTo();
    
    });
  },(error) => {
    this.snack.open('Contraseña y Usuarios Invalidos','Aceptar',{
      duration:3000
    })
  })
}


}


