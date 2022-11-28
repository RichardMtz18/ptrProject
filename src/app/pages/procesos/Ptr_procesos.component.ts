import { Component, OnInit } from '@angular/core';
import { Ptr_procesosModel } from '../../../models/Ptr_procesos.model';
import Swal from 'sweetalert2';
import { Ptr_procesosService } from '../../../services/Ptr_procesos.service';

@Component({
  selector: 'app-Ptr_procesos',
  templateUrl: './Ptr_procesos.component.html',
  styleUrls: ['./Ptr_procesos.component.css']
})
export class Ptr_procesosComponent implements OnInit {

mostrarActualizar: boolean = false;
  ptr_procesosAll: Ptr_procesosModel[] = [];
  idPtr_procesos: number= 0;

  constructor(private readonly Ptr_procesosService: Ptr_procesosService) { }

  async ngOnInit() {
    this.ptr_procesosAll = await this.Ptr_procesosService.getPtr_procesos();
  }

  obtenerPtr_procesos() {
    this.Ptr_procesosService.getPtr_procesos()
    .then((response: any) => {
      this.ptr_procesosAll = response.cont.ptr_procesosAll;
    })
    .catch((error: any) => {
      Swal.fire({
        icon: "error",
        text: error.error.msg
      });
    });
  }

  actualizar(idPtr_procesos: any) {
    this.idPtr_procesos = idPtr_procesos;
    this.mostrarActualizar = true;
  }

  restableceRegistro(){
    this.mostrarActualizar = false;
    this.idPtr_procesos = 0;
            this.obtenerPtr_procesos();
        }

        eliminar(ptr_procesos: Ptr_procesosModel)
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
                this.Ptr_procesosService.deletePtr_procesos(ptr_procesos.idptr_proceso)
                .then((response: any) => {
                    Swal.fire({
                    icon: "info",
            text: "Successfully removed"
                    });
            this.obtenerPtr_procesos();
        })
        .catch((error: any) => {
          Swal.fire({
            icon: "error",
            text: "Error updating Ptr_procesos."
          });
        })
      }
    })
  }


}