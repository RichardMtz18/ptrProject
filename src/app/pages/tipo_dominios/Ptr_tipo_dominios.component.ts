import { Component, OnInit } from '@angular/core';
import { Ptr_tipo_dominiosModel } from '../../../models/Ptr_tipo_dominios.model';
import Swal from 'sweetalert2';
import { Ptr_tipo_dominiosService } from '../../../services/Ptr_tipo_dominios.service';

@Component({
  selector: 'app-Ptr_tipo_dominios',
  templateUrl: './Ptr_tipo_dominios.component.html',
  styleUrls: ['./Ptr_tipo_dominios.component.css']
})
export class Ptr_tipo_dominiosComponent implements OnInit {

mostrarActualizar: boolean = false;
  ptr_tipo_dominiosAll: Ptr_tipo_dominiosModel[] = [];
  idPtr_tipo_dominios: number= 0;

  constructor(private readonly Ptr_tipo_dominiosService: Ptr_tipo_dominiosService) { }

  async ngOnInit() {
    this.ptr_tipo_dominiosAll = await this.Ptr_tipo_dominiosService.getPtr_tipo_dominios();
  }

  obtenerPtr_tipo_dominios() {
    this.Ptr_tipo_dominiosService.getPtr_tipo_dominios()
    .then((response: any) => {
      this.ptr_tipo_dominiosAll = response.cont.ptr_tipo_dominiosAll;
    })
    .catch((error: any) => {
      Swal.fire({
        icon: "error",
        text: error.error.msg
      });
    });
  }

  actualizar(idPtr_tipo_dominios: any) {
    this.idPtr_tipo_dominios = idPtr_tipo_dominios;
    this.mostrarActualizar = true;
  }

  restableceRegistro(){
    this.mostrarActualizar = false;
    this.idPtr_tipo_dominios = 0;
            this.obtenerPtr_tipo_dominios();
        }

        eliminar(ptr_tipo_dominios: Ptr_tipo_dominiosModel)
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
                this.Ptr_tipo_dominiosService.deletePtr_tipo_dominios(ptr_tipo_dominios.idptr_tipo_dominio)
                .then((response: any) => {
                    Swal.fire({
                    icon: "info",
            text: "Successfully removed"
                    });
            this.obtenerPtr_tipo_dominios();
        })
        .catch((error: any) => {
          Swal.fire({
            icon: "error",
            text: "Error updating Ptr_tipo_dominios."
          });
        })
      }
    })
  }


}