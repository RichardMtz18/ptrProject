import { Component, OnInit } from '@angular/core';
import { Ptr_dominiosModel } from '../models/Ptr_dominios.model';
import Swal from 'sweetalert2';
import { Ptr_dominiosService } from '../services/Ptr_dominios.service';

@Component({
  selector: 'app-Ptr_dominios',
  templateUrl: './Ptr_dominios.component.html',
  styleUrls: ['./Ptr_dominios.component.css']
})
export class Ptr_dominiosComponent implements OnInit {

mostrarActualizar: boolean = false;
  ptr_dominiosAll: Ptr_dominiosModel[] = [];
  idPtr_dominios: number= 0;

  constructor(private readonly Ptr_dominiosService: Ptr_dominiosService) { }

  async ngOnInit() {
    this.ptr_dominiosAll = await this.Ptr_dominiosService.getPtr_dominios();
  }

  obtenerPtr_dominios() {
    this.Ptr_dominiosService.getPtr_dominios()
    .then((response: any) => {
      this.ptr_dominiosAll = response.cont.ptr_dominiosAll;
    })
    .catch((error: any) => {
      Swal.fire({
        icon: "error",
        text: error.error.msg
      });
    });
  }

  actualizar(idPtr_dominios: any) {
    this.idPtr_dominios = idPtr_dominios;
    this.mostrarActualizar = true;
  }

  restableceRegistro(){
    this.mostrarActualizar = false;
    this.idPtr_dominios = 0;
            this.obtenerPtr_dominios();
        }

        eliminar(ptr_dominios: Ptr_dominiosModel)
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
                this.Ptr_dominiosService.deletePtr_dominios(ptr_dominios.idptr_dominio)
                .then((response: any) => {
                    Swal.fire({
                    icon: "info",
            text: "Successfully removed"
                    });
            this.obtenerPtr_dominios();
        })
        .catch((error: any) => {
          Swal.fire({
            icon: "error",
            text: "Error updating Ptr_dominios."
          });
        })
      }
    })
  }


}