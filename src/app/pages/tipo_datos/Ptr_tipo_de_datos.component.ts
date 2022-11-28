import { Component, OnInit } from '@angular/core';
import { Ptr_tipo_de_datosModel } from '../../../models/Ptr_tipo_de_datos.model';
import Swal from 'sweetalert2';
import { Ptr_tipo_de_datosService } from '../../../services/Ptr_tipo_de_datos.service';

@Component({
  selector: 'app-Ptr_tipo_de_datos',
  templateUrl: './Ptr_tipo_de_datos.component.html',
  styleUrls: ['./Ptr_tipo_de_datos.component.css']
})
export class Ptr_tipo_de_datosComponent implements OnInit {

mostrarActualizar: boolean = false;
  ptr_tipo_de_datosAll: Ptr_tipo_de_datosModel[] = [];
  idPtr_tipo_de_datos: number= 0;

  constructor(private readonly Ptr_tipo_de_datosService: Ptr_tipo_de_datosService) { }

  async ngOnInit() {
    this.ptr_tipo_de_datosAll = await this.Ptr_tipo_de_datosService.getPtr_tipo_de_datos();
  }

  obtenerPtr_tipo_de_datos() {
    this.Ptr_tipo_de_datosService.getPtr_tipo_de_datos()
    .then((response: any) => {
      this.ptr_tipo_de_datosAll = response.cont.ptr_tipo_de_datosAll;
    })
    .catch((error: any) => {
      Swal.fire({
        icon: "error",
        text: error.error.msg
      });
    });
  }

  actualizar(idPtr_tipo_de_datos: any) {
    this.idPtr_tipo_de_datos = idPtr_tipo_de_datos;
    this.mostrarActualizar = true;
  }

  restableceRegistro(){
    this.mostrarActualizar = false;
    this.idPtr_tipo_de_datos = 0;
            this.obtenerPtr_tipo_de_datos();
        }

        eliminar(ptr_tipo_de_datos: Ptr_tipo_de_datosModel)
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
                this.Ptr_tipo_de_datosService.deletePtr_tipo_de_datos(ptr_tipo_de_datos.idptr_tipo_de_dato)
                .then((response: any) => {
                    Swal.fire({
                    icon: "info",
            text: "Successfully removed"
                    });
            this.obtenerPtr_tipo_de_datos();
        })
        .catch((error: any) => {
          Swal.fire({
            icon: "error",
            text: "Error updating Ptr_tipo_de_datos."
          });
        })
      }
    })
  }


}