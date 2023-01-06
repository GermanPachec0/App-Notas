import { Component, OnInit } from '@angular/core';
import { Nota } from 'src/app/interface/NotaDTO';
import { NotasService } from 'src/app/services/notas/notas.service';

@Component({
  selector: 'app-lista-notas',
  templateUrl: './lista-notas.component.html',
  styleUrls: ['./lista-notas.component.css']
})
export class ListaNotasComponent implements OnInit {
  notas : Nota[] = []
  
  constructor(private notaService:NotasService) { }

  ngOnInit(): void {
      this.notaService.getNotas().subscribe((data) =>{
        console.log(data);
      this.notas = data;
      });
      
  }

  remove(idNota:any){
      this.notas = this.notas.filter((nota:any) => nota.idNota != idNota);
      return this.notas;
  }

}
