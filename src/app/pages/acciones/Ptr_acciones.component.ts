import { Component, OnInit } from '@angular/core';
import { Ptr_accionesModel } from '../../../models/Ptr_acciones.model';
import Swal from 'sweetalert2';
import { Ptr_accionesService } from '../../../services/Ptr_acciones.service';

@Component({
  selector: 'app-Ptr_acciones',
  templateUrl: './Ptr_acciones.component.html',
  styleUrls: ['./Ptr_acciones.component.css']
})
export class Ptr_accionesComponent implements OnInit {

mostrarActualizar: boolean = false;
  ptr_accionesAll: Ptr_accionesModel[] = [];
  idPtr_acciones: number= 0;

  constructor(private readonly Ptr_accionesService: Ptr_accionesService) { }

  async ngOnInit() {
    this.ptr_accionesAll = await this.Ptr_accionesService.getPtr_acciones();
  }

  obtenerPtr_acciones() {
    this.Ptr_accionesService.getPtr_acciones()
    .then((response: any) => {
      this.ptr_accionesAll = response.cont.ptr_accionesAll;
    })
    .catch((error: any) => {
      Swal.fire({
        icon: "error",
        text: error.error.msg
      });
    });
  }

  actualizar(idPtr_acciones: any) {
    this.idPtr_acciones = idPtr_acciones;
    this.mostrarActualizar = true;
  }

  restableceRegistro(){
    this.mostrarActualizar = false;
    this.idPtr_acciones = 0;
            this.obtenerPtr_acciones();
        }

        eliminar(ptr_acciones: Ptr_accionesModel)
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
                this.Ptr_accionesService.deletePtr_acciones(ptr_acciones.idptr_accion)
                .then((response: any) => {
                    Swal.fire({
                    icon: "info",
            text: "Successfully removed"
                    });
            this.obtenerPtr_acciones();
        })
        .catch((error: any) => {
          Swal.fire({
            icon: "error",
            text: "Error updating Ptr_acciones."
          });
        })
      }
    })
  }


}