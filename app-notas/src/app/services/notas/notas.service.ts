import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Nota } from 'src/app/interface/NotaDTO';
import { LoginServiceService } from '../login/login-service.service';

@Injectable({
  providedIn: 'root'
})
export class NotasService {
  
//  API_URL = "http://localhost:8080/api/notas/me";
  constructor(private http: HttpClient,
    private userService: LoginServiceService) { }


public getNotas(){
  return this.http.get<Nota[]>('/api/notas/me');
}

public delete(id:any){
    return  this.http.delete('/api/notas/'+id);
}
 public updateNota(nota:Nota){
    return this.http.put<Nota>('/api/notas/update',nota);
 }

 public createNota(nota:Nota){
  return this.http.post<Nota>('/api/nota/create',nota);
 }

 public getNotaById(id:any){
  return this.http.get('/api/notas/'+id);
 }
}
