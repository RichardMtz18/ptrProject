import { Component, OnInit } from '@angular/core';
import { Ptr_reglasModel } from '../../../models/Ptr_reglas.model';
import Swal from 'sweetalert2';
import { Ptr_reglasService } from '../../../services/Ptr_reglas.service';

@Component({
  selector: 'app-Ptr_reglas',
  templateUrl: './Ptr_reglas.component.html',
  styleUrls: ['./Ptr_reglas.component.css']
})
export class Ptr_reglasComponent implements OnInit {

mostrarActualizar: boolean = false;
  ptr_reglasAll: Ptr_reglasModel[] = [];
  idPtr_reglas: number= 0;

  constructor(private readonly Ptr_reglasService: Ptr_reglasService) { }

  async ngOnInit() {
    this.ptr_reglasAll = await this.Ptr_reglasService.getPtr_reglas();
  }

  obtenerPtr_reglas() {
    this.Ptr_reglasService.getPtr_reglas()
    .then((response: any) => {
      this.ptr_reglasAll = response.cont.ptr_reglasAll;
    })
    .catch((error: any) => {
      Swal.fire({
        icon: "error",
        text: error.error.msg
      });
    });
  }

  actualizar(idPtr_reglas: any) {
    this.idPtr_reglas = idPtr_reglas;
    this.mostrarActualizar = true;
  }

  restableceRegistro(){
    this.mostrarActualizar = false;
    this.idPtr_reglas = 0;
            this.obtenerPtr_reglas();
        }

        eliminar(ptr_reglas: Ptr_reglasModel)
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
                this.Ptr_reglasService.deletePtr_reglas(ptr_reglas.idptr_regla)
                .then((response: any) => {
                    Swal.fire({
                    icon: "info",
            text: "Successfully removed"
                    });
            this.obtenerPtr_reglas();
        })
        .catch((error: any) => {
          Swal.fire({
            icon: "error",
            text: "Error updating Ptr_reglas."
          });
        })
      }
    })
  }


}