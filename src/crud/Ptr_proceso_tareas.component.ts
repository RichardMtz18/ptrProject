import { Component, OnInit } from '@angular/core';
import { Ptr_proceso_tareasModel } from '../models/Ptr_proceso_tareas.model';
import Swal from 'sweetalert2';
import { Ptr_proceso_tareasService } from '../services/Ptr_proceso_tareas.service';

@Component({
  selector: 'app-Ptr_proceso_tareas',
  templateUrl: './Ptr_proceso_tareas.component.html',
  styleUrls: ['./Ptr_proceso_tareas.component.css']
})
export class Ptr_proceso_tareasComponent implements OnInit {

mostrarActualizar: boolean = false;
  ptr_proceso_tareasAll: Ptr_proceso_tareasModel[] = [];
  idPtr_proceso_tareas: number= 0;

  constructor(private readonly Ptr_proceso_tareasService: Ptr_proceso_tareasService) { }

  async ngOnInit() {
    this.ptr_proceso_tareasAll = await this.Ptr_proceso_tareasService.getPtr_proceso_tareas();
  }

  obtenerPtr_proceso_tareas() {
    this.Ptr_proceso_tareasService.getPtr_proceso_tareas()
    .then((response: any) => {
      this.ptr_proceso_tareasAll = response.cont.ptr_proceso_tareasAll;
    })
    .catch((error: any) => {
      Swal.fire({
        icon: "error",
        text: error.error.msg
      });
    });
  }

  actualizar(idPtr_proceso_tareas: any) {
    this.idPtr_proceso_tareas = idPtr_proceso_tareas;
    this.mostrarActualizar = true;
  }

  restableceRegistro(){
    this.mostrarActualizar = false;
    this.idPtr_proceso_tareas = 0;
            this.obtenerPtr_proceso_tareas();
        }

        eliminar(ptr_proceso_tareas: Ptr_proceso_tareasModel)
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
                this.Ptr_proceso_tareasService.deletePtr_proceso_tareas(ptr_proceso_tareas.idptr_proceso_tarea)
                .then((response: any) => {
                    Swal.fire({
                    icon: "info",
            text: "Successfully removed"
                    });
            this.obtenerPtr_proceso_tareas();
        })
        .catch((error: any) => {
          Swal.fire({
            icon: "error",
            text: "Error updating Ptr_proceso_tareas."
          });
        })
      }
    })
  }


}