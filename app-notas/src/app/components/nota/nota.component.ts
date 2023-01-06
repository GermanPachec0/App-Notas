import { Component, OnInit ,Input, Output, EventEmitter} from '@angular/core';
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
  constructor(private notaService:NotasService) { }

  
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

  editarNota(nota:any){
    Swal.fire({
      title: 'Editar Nota',
      html: `
      Titulo
      <input [(ngModel)] = 'title'  type="text" id="titulo" class="swal2-input" placeholder="Username" value='${nota.titulo}'>
      Descripcion
      <input type="text" id="cuerpo" class="swal2-input" placeholder="Password" value='${nota.cuerpo}'><br>
      <label>Esta Terminada? <br>
      <input type="checkbox" id="terminada" class="swal2-input" placeholder="Password" value='${nota.terminada}'></label>`,
      confirmButtonText: 'Editar',
      focusConfirm: false,
      showCancelButton:true,
      cancelButtonColor:'#d33',
    }).then((result) => {
      if(result.isConfirmed){
      const titulo = this.title;
    
      console.log(titulo);
      }
    })
  }

}
