import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginDTO } from 'src/app/interface/LoginDTO';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
API_URL = "http://localhost:8090/api/auth/login"
  constructor(private http: HttpClient) { }

  login(username:string ,password:string){
    const login: LoginDTO = {
      usernameOrEmail: username,
      password:password 
    }

    return this.http.post(this.API_URL,login);
    
  }
}
