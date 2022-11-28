import { Component, OnInit } from '@angular/core';
import { Ptr_sentenciasModel } from '../models/Ptr_sentencias.model';
import Swal from 'sweetalert2';
import { Ptr_sentenciasService } from '../services/Ptr_sentencias.service';

@Component({
  selector: 'app-Ptr_sentencias',
  templateUrl: './Ptr_sentencias.component.html',
  styleUrls: ['./Ptr_sentencias.component.css']
})
export class Ptr_sentenciasComponent implements OnInit {

mostrarActualizar: boolean = false;
  ptr_sentenciasAll: Ptr_sentenciasModel[] = [];
  idPtr_sentencias: number= 0;

  constructor(private readonly Ptr_sentenciasService: Ptr_sentenciasService) { }

  async ngOnInit() {
    this.ptr_sentenciasAll = await this.Ptr_sentenciasService.getPtr_sentencias();
  }

  obtenerPtr_sentencias() {
    this.Ptr_sentenciasService.getPtr_sentencias()
    .then((response: any) => {
      this.ptr_sentenciasAll = response.cont.ptr_sentenciasAll;
    })
    .catch((error: any) => {
      Swal.fire({
        icon: "error",
        text: error.error.msg
      });
    });
  }

  actualizar(idPtr_sentencias: any) {
    this.idPtr_sentencias = idPtr_sentencias;
    this.mostrarActualizar = true;
  }

  restableceRegistro(){
    this.mostrarActualizar = false;
    this.idPtr_sentencias = 0;
            this.obtenerPtr_sentencias();
        }

        eliminar(ptr_sentencias: Ptr_sentenciasModel)
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
                this.Ptr_sentenciasService.deletePtr_sentencias(ptr_sentencias.idptr_tipo_sentencia)
                .then((response: any) => {
                    Swal.fire({
                    icon: "info",
            text: "Successfully removed"
                    });
            this.obtenerPtr_sentencias();
        })
        .catch((error: any) => {
          Swal.fire({
            icon: "error",
            text: "Error updating Ptr_sentencias."
          });
        })
      }
    })
  }


}