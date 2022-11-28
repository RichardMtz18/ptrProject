import { Component, OnInit } from '@angular/core';
import { Ptr_propiedadesModel } from '../models/Ptr_propiedades.model';
import Swal from 'sweetalert2';
import { Ptr_propiedadesService } from '../services/Ptr_propiedades.service';

@Component({
  selector: 'app-Ptr_propiedades',
  templateUrl: './Ptr_propiedades.component.html',
  styleUrls: ['./Ptr_propiedades.component.css']
})
export class Ptr_propiedadesComponent implements OnInit {

mostrarActualizar: boolean = false;
  ptr_propiedadesAll: Ptr_propiedadesModel[] = [];
  idPtr_propiedades: number= 0;

  constructor(private readonly Ptr_propiedadesService: Ptr_propiedadesService) { }

  async ngOnInit() {
    this.ptr_propiedadesAll = await this.Ptr_propiedadesService.getPtr_propiedades();
  }

  obtenerPtr_propiedades() {
    this.Ptr_propiedadesService.getPtr_propiedades()
    .then((response: any) => {
      this.ptr_propiedadesAll = response.cont.ptr_propiedadesAll;
    })
    .catch((error: any) => {
      Swal.fire({
        icon: "error",
        text: error.error.msg
      });
    });
  }

  actualizar(idPtr_propiedades: any) {
    this.idPtr_propiedades = idPtr_propiedades;
    this.mostrarActualizar = true;
  }

  restableceRegistro(){
    this.mostrarActualizar = false;
    this.idPtr_propiedades = 0;
            this.obtenerPtr_propiedades();
        }

        eliminar(ptr_propiedades: Ptr_propiedadesModel)
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
                this.Ptr_propiedadesService.deletePtr_propiedades(ptr_propiedades.idptr_propiedad)
                .then((response: any) => {
                    Swal.fire({
                    icon: "info",
            text: "Successfully removed"
                    });
            this.obtenerPtr_propiedades();
        })
        .catch((error: any) => {
          Swal.fire({
            icon: "error",
            text: "Error updating Ptr_propiedades."
          });
        })
      }
    })
  }


}