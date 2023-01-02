import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup, FormBuilder,Validators} from '@angular/forms';
import { TokenDTO } from 'src/app/interface/tokenDTO';
import { LoginServiceService } from 'src/app/services/login/login-service.service';
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
  ) { }

  ngOnInit(): void {
  }

enviarDatos():any{
  console.log(this.formLogin.value)
  this.loginService.login(String(this.formLogin.value.username),String(this.formLogin.value.password)).subscribe((res) => {
    this.token = res;
    console.log(this.token.tokenDeAcceso);
  })
}

}
