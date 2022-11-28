import { Component, OnInit } from '@angular/core';
import { Ptr_reglas_detModel } from '../../../models/Ptr_reglas_det.model';
import Swal from 'sweetalert2';
import { Ptr_reglas_detService } from '../../../services/Ptr_reglas_det.service';

@Component({
  selector: 'app-Ptr_reglas_det',
  templateUrl: './Ptr_reglas_det.component.html',
  styleUrls: ['./Ptr_reglas_det.component.css']
})
export class Ptr_reglas_detComponent implements OnInit {

mostrarActualizar: boolean = false;
  ptr_reglas_detAll: Ptr_reglas_detModel[] = [];
  idPtr_reglas_det: number= 0;

  constructor(private readonly Ptr_reglas_detService: Ptr_reglas_detService) { }

  async ngOnInit() {
    this.ptr_reglas_detAll = await this.Ptr_reglas_detService.getPtr_reglas_det();
  }

  obtenerPtr_reglas_det() {
    this.Ptr_reglas_detService.getPtr_reglas_det()
    .then((response: any) => {
      this.ptr_reglas_detAll = response.cont.ptr_reglas_detAll;
    })
    .catch((error: any) => {
      Swal.fire({
        icon: "error",
        text: error.error.msg
      });
    });
  }

  actualizar(idPtr_reglas_det: any) {
    this.idPtr_reglas_det = idPtr_reglas_det;
    this.mostrarActualizar = true;
  }

  restableceRegistro(){
    this.mostrarActualizar = false;
    this.idPtr_reglas_det = 0;
            this.obtenerPtr_reglas_det();
        }

        eliminar(ptr_reglas_det: Ptr_reglas_detModel)
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
                this.Ptr_reglas_detService.deletePtr_reglas_det(ptr_reglas_det.idptr_regla_det)
                .then((response: any) => {
                    Swal.fire({
                    icon: "info",
            text: "Successfully removed"
                    });
            this.obtenerPtr_reglas_det();
        })
        .catch((error: any) => {
          Swal.fire({
            icon: "error",
            text: "Error updating Ptr_reglas_det."
          });
        })
      }
    })
  }


}