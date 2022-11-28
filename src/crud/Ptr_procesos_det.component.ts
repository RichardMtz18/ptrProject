import { Component, OnInit } from '@angular/core';
import { Ptr_procesos_detModel } from '../models/Ptr_procesos_det.model';
import Swal from 'sweetalert2';
import { Ptr_procesos_detService } from '../services/Ptr_procesos_det.service';

@Component({
  selector: 'app-Ptr_procesos_det',
  templateUrl: './Ptr_procesos_det.component.html',
  styleUrls: ['./Ptr_procesos_det.component.css']
})
export class Ptr_procesos_detComponent implements OnInit {

mostrarActualizar: boolean = false;
  ptr_procesos_detAll: Ptr_procesos_detModel[] = [];
  idPtr_procesos_det: number= 0;

  constructor(private readonly Ptr_procesos_detService: Ptr_procesos_detService) { }

  async ngOnInit() {
    this.ptr_procesos_detAll = await this.Ptr_procesos_detService.getPtr_procesos_det();
  }

  obtenerPtr_procesos_det() {
    this.Ptr_procesos_detService.getPtr_procesos_det()
    .then((response: any) => {
      this.ptr_procesos_detAll = response.cont.ptr_procesos_detAll;
    })
    .catch((error: any) => {
      Swal.fire({
        icon: "error",
        text: error.error.msg
      });
    });
  }

  actualizar(idPtr_procesos_det: any) {
    this.idPtr_procesos_det = idPtr_procesos_det;
    this.mostrarActualizar = true;
  }

  restableceRegistro(){
    this.mostrarActualizar = false;
    this.idPtr_procesos_det = 0;
            this.obtenerPtr_procesos_det();
        }

        eliminar(ptr_procesos_det: Ptr_procesos_detModel)
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
                this.Ptr_procesos_detService.deletePtr_procesos_det(this.idPtr_procesos_det)
                .then((response: any) => {
                    Swal.fire({
                    icon: "info",
            text: "Successfully removed"
                    });
            this.obtenerPtr_procesos_det();
        })
        .catch((error: any) => {
          Swal.fire({
            icon: "error",
            text: "Error updating Ptr_procesos_det."
          });
        })
      }
    })
  }


}