import { Component, OnInit } from '@angular/core';
import { Ptr_tipo_tareasModel } from '../../../models/Ptr_tipo_tareas.model';
import Swal from 'sweetalert2';
import { Ptr_tipo_tareasService } from '../../../services/Ptr_tipo_tareas.service';

@Component({
  selector: 'app-Ptr_tipo_tareas',
  templateUrl: './Ptr_tipo_tareas.component.html',
  styleUrls: ['./Ptr_tipo_tareas.component.css']
})
export class Ptr_tipo_tareasComponent implements OnInit {

mostrarActualizar: boolean = false;
  ptr_tipo_tareasAll: Ptr_tipo_tareasModel[] = [];
  idPtr_tipo_tareas: number= 0;

  constructor(private readonly Ptr_tipo_tareasService: Ptr_tipo_tareasService) { }

  async ngOnInit() {
    this.ptr_tipo_tareasAll = await this.Ptr_tipo_tareasService.getPtr_tipo_tareas();
  }

  obtenerPtr_tipo_tareas() {
    this.Ptr_tipo_tareasService.getPtr_tipo_tareas()
    .then((response: any) => {
      this.ptr_tipo_tareasAll = response.cont.ptr_tipo_tareasAll;
    })
    .catch((error: any) => {
      Swal.fire({
        icon: "error",
        text: error.error.msg
      });
    });
  }

  actualizar(idPtr_tipo_tareas: any) {
    this.idPtr_tipo_tareas = idPtr_tipo_tareas;
    this.mostrarActualizar = true;
  }

  restableceRegistro(){
    this.mostrarActualizar = false;
    this.idPtr_tipo_tareas = 0;
            this.obtenerPtr_tipo_tareas();
        }

        eliminar(ptr_tipo_tareas: Ptr_tipo_tareasModel)
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
                this.Ptr_tipo_tareasService.deletePtr_tipo_tareas(ptr_tipo_tareas.idptr_tipo_tarea)
                .then((response: any) => {
                    Swal.fire({
                    icon: "info",
            text: "Successfully removed"
                    });
            this.obtenerPtr_tipo_tareas();
        })
        .catch((error: any) => {
          Swal.fire({
            icon: "error",
            text: "Error updating Ptr_tipo_tareas."
          });
        })
      }
    })
  }


}