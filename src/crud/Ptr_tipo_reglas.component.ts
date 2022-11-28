import { Component, OnInit } from '@angular/core';
import { Ptr_tipo_reglasModel } from '../models/Ptr_tipo_reglas.model';
import Swal from 'sweetalert2';
import { Ptr_tipo_reglasService } from '../services/Ptr_tipo_reglas.service';

@Component({
  selector: 'app-Ptr_tipo_reglas',
  templateUrl: './Ptr_tipo_reglas.component.html',
  styleUrls: ['./Ptr_tipo_reglas.component.css']
})
export class Ptr_tipo_reglasComponent implements OnInit {

mostrarActualizar: boolean = false;
  ptr_tipo_reglasAll: Ptr_tipo_reglasModel[] = [];
  idPtr_tipo_reglas: number= 0;

  constructor(private readonly Ptr_tipo_reglasService: Ptr_tipo_reglasService) { }

  async ngOnInit() {
    this.ptr_tipo_reglasAll = await this.Ptr_tipo_reglasService.getPtr_tipo_reglas();
  }

  obtenerPtr_tipo_reglas() {
    this.Ptr_tipo_reglasService.getPtr_tipo_reglas()
    .then((response: any) => {
      this.ptr_tipo_reglasAll = response.cont.ptr_tipo_reglasAll;
    })
    .catch((error: any) => {
      Swal.fire({
        icon: "error",
        text: error.error.msg
      });
    });
  }

  actualizar(idPtr_tipo_reglas: any) {
    this.idPtr_tipo_reglas = idPtr_tipo_reglas;
    this.mostrarActualizar = true;
  }

  restableceRegistro(){
    this.mostrarActualizar = false;
    this.idPtr_tipo_reglas = 0;
            this.obtenerPtr_tipo_reglas();
        }

        eliminar(ptr_tipo_reglas: Ptr_tipo_reglasModel)
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
                this.Ptr_tipo_reglasService.deletePtr_tipo_reglas(ptr_tipo_reglas.idptr_tipo_regla)
                .then((response: any) => {
                    Swal.fire({
                    icon: "info",
            text: "Successfully removed"
                    });
            this.obtenerPtr_tipo_reglas();
        })
        .catch((error: any) => {
          Swal.fire({
            icon: "error",
            text: "Error updating Ptr_tipo_reglas."
          });
        })
      }
    })
  }


}