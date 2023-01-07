import { Component, OnInit } from '@angular/core';
import { Form, FormControl,FormGroup,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Nota } from 'src/app/interface/NotaDTO';
import { NotasService } from 'src/app/services/notas/notas.service';
import  Swal  from 'sweetalert2';

@Component({
  selector: 'app-editar-nota',
  templateUrl: './editar-nota.component.html',
  styleUrls: ['./editar-nota.component.css']
})
export class EditarNotaComponent implements OnInit {
  notaid:any;
  nota  !: Nota;
  formEditar!:FormGroup;


  constructor(
    private route:ActivatedRoute,
    private notaService: NotasService,
    private router:Router,
  ) { }

  ngOnInit(): void {
    this.notaid = this.route.snapshot.params['id'];
    this.notaService.getNotaById(this.notaid).subscribe(
      (res:any) => {
        this.nota = res;
        console.log(this.nota);
        this.formEditar = new FormGroup({
          titulo: new FormControl(this.nota.titulo),
          descripcion: new FormControl(this.nota.cuerpo),
          terminada: new FormControl(this.nota.terminada)

        });
       
        
      },
      (error) =>{
        Swal.fire('Nota No Encontrada', '', 'info')
        this.router.navigateByUrl('/usuario/lista-notas')
      });
      
    
  
  }

  editar(){

    Swal.fire({
      title: 'Desea Actualizar nota?',
      showDenyButton: true,
      confirmButtonText: 'Editar',
      denyButtonText: `Cancelar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.nota.titulo =this.formEditar.value.titulo;
        this.nota.cuerpo =this.formEditar.value.descripcion;
        this.nota.terminada =this.formEditar.value.terminada;
        this.notaService.updateNota(this.nota).subscribe((rta) =>{
          Swal.fire('Saved!', '', 'success')
        },(error) =>{
          Swal.fire('Nota No Encontrada', '', 'info')
        });
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
   
  }





}
