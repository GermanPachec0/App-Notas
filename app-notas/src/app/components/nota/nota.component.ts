import { Component, OnInit ,Input, Output, EventEmitter} from '@angular/core';
import { Route, Router } from '@angular/router';
import { Nota } from 'src/app/interface/NotaDTO';
import { NotasService } from 'src/app/services/notas/notas.service';
import  Swal  from 'sweetalert2';
import { __values } from 'tslib';


@Component({
  selector: 'app-nota',
  templateUrl: './nota.component.html',
  styleUrls: ['./nota.component.css']
})
export class NotaComponent implements OnInit {
@Input() nota !: Nota;

title !: String;

@Output() idNotaMsg = new EventEmitter<any>();
  constructor(private notaService:NotasService,
              private router:Router) { }

  
  ngOnInit(): void {
  }



  eliminarNota(idNota:any){
    Swal.fire({
      title:'Eliminar Nota',
      text:'¿Estás seguro de eliminar Nota?',
      icon:'warning',
      showCancelButton:true,
      confirmButtonColor:'#3085d6',
      cancelButtonColor:'#d33',
      confirmButtonText:'Eliminar',
      cancelButtonText:'Cancelar'
    }).then((result) => {
      if(result.isConfirmed){
        this.notaService.delete(idNota).subscribe(
          (data) => {
            this.idNotaMsg.emit(idNota);
            Swal.fire('Nota eliminado','Nota eliminada con exito!','success');
          },
          (error) => {
            Swal.fire('Error','Error al eliminar Nota','error');
          }
        )
      }
    })
  };


}
