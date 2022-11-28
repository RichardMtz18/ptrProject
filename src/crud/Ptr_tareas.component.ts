import { Component, OnInit } from '@angular/core';
import { Ptr_tareasModel } from '../models/Ptr_tareas.model';
import Swal from 'sweetalert2';
import { Ptr_tareasService } from '../services/Ptr_tareas.service';

@Component({
  selector: 'app-Ptr_tareas',
  templateUrl: './Ptr_tareas.component.html',
  styleUrls: ['./Ptr_tareas.component.css']
})
export class Ptr_tareasComponent implements OnInit {

mostrarActualizar: boolean = false;
  ptr_tareasAll: Ptr_tareasModel[] = [];
  idPtr_tareas: number= 0;

  constructor(private readonly Ptr_tareasService: Ptr_tareasService) { }

  async ngOnInit() {
    this.ptr_tareasAll = await this.Ptr_tareasService.getPtr_tareas();
  }

  obtenerPtr_tareas() {
    this.Ptr_tareasService.getPtr_tareas()
    .then((response: any) => {
      this.ptr_tareasAll = response.cont.ptr_tareasAll;
    })
    .catch((error: any) => {
      Swal.fire({
        icon: "error",
        text: error.error.msg
      });
    });
  }

  actualizar(idPtr_tareas: any) {
    this.idPtr_tareas = idPtr_tareas;
    this.mostrarActualizar = true;
  }

  restableceRegistro(){
    this.mostrarActualizar = false;
    this.idPtr_tareas = 0;
            this.obtenerPtr_tareas();
        }

        eliminar(ptr_tareas: Ptr_tareasModel)
        {
            Swal.fire({
            icon: "question",
    title: `Are you sure to delete?`,
    showCancelButton: true,
    confirmButtonText: 'Yes',
    cancelButtonText: "Cancel"
            }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed)
            {
                this.Ptr_tareasService.deletePtr_tareas(ptr_tareas.idptr_tarea)
                .then((response: any) => {
                    Swal.fire({
                    icon: "info",
            text: "Successfully removed"
                    });
            this.obtenerPtr_tareas();
        })
        .catch((error: any) => {
          Swal.fire({
            icon: "error",
            text: "Error updating Ptr_tareas."
          });
        })
      }
    })
  }


}