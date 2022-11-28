import { Component, OnInit } from '@angular/core';
import { Ptr_objetosModel } from '../models/Ptr_objetos.model';
import Swal from 'sweetalert2';
import { Ptr_objetosService } from '../services/Ptr_objetos.service';

@Component({
  selector: 'app-Ptr_objetos',
  templateUrl: './Ptr_objetos.component.html',
  styleUrls: ['./Ptr_objetos.component.css']
})
export class Ptr_objetosComponent implements OnInit {

mostrarActualizar: boolean = false;
  ptr_objetosAll: Ptr_objetosModel[] = [];
  idPtr_objetos: number= 0;

  constructor(private readonly Ptr_objetosService: Ptr_objetosService) { }

  async ngOnInit() {
    this.ptr_objetosAll = await this.Ptr_objetosService.getPtr_objetos();
  }

  obtenerPtr_objetos() {
    this.Ptr_objetosService.getPtr_objetos()
    .then((response: any) => {
      this.ptr_objetosAll = response.cont.ptr_objetosAll;
    })
    .catch((error: any) => {
      Swal.fire({
        icon: "error",
        text: error.error.msg
      });
    });
  }

  actualizar(idPtr_objetos: any) {
    this.idPtr_objetos = idPtr_objetos;
    this.mostrarActualizar = true;
  }

  restableceRegistro(){
    this.mostrarActualizar = false;
    this.idPtr_objetos = 0;
            this.obtenerPtr_objetos();
        }

        eliminar(ptr_objetos: Ptr_objetosModel)
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
                this.Ptr_objetosService.deletePtr_objetos(ptr_objetos.idptr_objeto)
                .then((response: any) => {
                    Swal.fire({
                    icon: "info",
            text: "Successfully removed"
                    });
            this.obtenerPtr_objetos();
        })
        .catch((error: any) => {
          Swal.fire({
            icon: "error",
            text: "Error updating Ptr_objetos."
          });
        })
      }
    })
  }


}