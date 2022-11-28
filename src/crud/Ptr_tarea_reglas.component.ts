import { Component, OnInit } from '@angular/core';
import { Ptr_tarea_reglasModel } from '../models/Ptr_tarea_reglas.model';
import Swal from 'sweetalert2';
import { Ptr_tarea_reglasService } from '../services/Ptr_tarea_reglas.service';

@Component({
  selector: 'app-Ptr_tarea_reglas',
  templateUrl: './Ptr_tarea_reglas.component.html',
  styleUrls: ['./Ptr_tarea_reglas.component.css']
})
export class Ptr_tarea_reglasComponent implements OnInit {

mostrarActualizar: boolean = false;
  ptr_tarea_reglasAll: Ptr_tarea_reglasModel[] = [];
  idPtr_tarea_reglas: number= 0;

  constructor(private readonly Ptr_tarea_reglasService: Ptr_tarea_reglasService) { }

  async ngOnInit() {
    this.ptr_tarea_reglasAll = await this.Ptr_tarea_reglasService.getPtr_tarea_reglas();
  }

  obtenerPtr_tarea_reglas() {
    this.Ptr_tarea_reglasService.getPtr_tarea_reglas()
    .then((response: any) => {
      this.ptr_tarea_reglasAll = response.cont.ptr_tarea_reglasAll;
    })
    .catch((error: any) => {
      Swal.fire({
        icon: "error",
        text: error.error.msg
      });
    });
  }

  actualizar(idPtr_tarea_reglas: any) {
    this.idPtr_tarea_reglas = idPtr_tarea_reglas;
    this.mostrarActualizar = true;
  }

  restableceRegistro(){
    this.mostrarActualizar = false;
    this.idPtr_tarea_reglas = 0;
            this.obtenerPtr_tarea_reglas();
        }

        eliminar(ptr_tarea_reglas: Ptr_tarea_reglasModel)
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
                this.Ptr_tarea_reglasService.deletePtr_tarea_reglas(ptr_tarea_reglas.idptr_tarea_regla)
                .then((response: any) => {
                    Swal.fire({
                    icon: "info",
            text: "Successfully removed"
                    });
            this.obtenerPtr_tarea_reglas();
        })
        .catch((error: any) => {
          Swal.fire({
            icon: "error",
            text: "Error updating Ptr_tarea_reglas."
          });
        })
      }
    })
  }


}