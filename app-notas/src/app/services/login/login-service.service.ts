import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginDTO } from 'src/app/interface/LoginDTO';
import { TokenDTO } from 'src/app/interface/tokenDTO';
import { User } from 'src/app/interface/User';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  public loginStatusSubject = new Subject<boolean>();
API_URL = "http://localhost:8080/api/auth"
  constructor(private http: HttpClient) { }

  

  public login(username:string ,password:string){
    const login: LoginDTO = {
      usernameOrEmail: username,
      password:password 
    }
    return this.http.post(`${this.API_URL}/login`,login);
  }

  public isLoggedIn(){
    let tokenStr = localStorage.getItem('token');
    if(tokenStr == undefined || tokenStr == '' || tokenStr == null){
      return false;
    }else{
      return true;
    }
  }

  public logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return true;
  }

  public getCurrentUser(){
    return this.http.get(`${this.API_URL}/actual-usuario`);
  }

  public setToken(token:TokenDTO){
    localStorage.setItem("token",token.tokenDeAcceso)
  }

  public getToken(){
    return localStorage.getItem("token");
  }

  public setUser(user:User){
    return localStorage.setItem("user",JSON.stringify(user));

  }

  public getUser(){
    let userSTR = localStorage.getItem('user');
    if(userSTR != null){
      return JSON.parse(userSTR);
    }else{
      this.logout();
      return null;
    }
  }

  public getUserRole(){
    let user = this.getUser();
    return user.roles[0].nombre;
  }




}
