import { Component, OnInit } from '@angular/core';
import { Ptr_operadoresModel } from '../models/Ptr_operadores.model';
import Swal from 'sweetalert2';
import { Ptr_operadoresService } from '../services/Ptr_operadores.service';

@Component({
  selector: 'app-Ptr_operadores',
  templateUrl: './Ptr_operadores.component.html',
  styleUrls: ['./Ptr_operadores.component.css']
})
export class Ptr_operadoresComponent implements OnInit {

mostrarActualizar: boolean = false;
  ptr_operadoresAll: Ptr_operadoresModel[] = [];
  idPtr_operadores: number= 0;

  constructor(private readonly Ptr_operadoresService: Ptr_operadoresService) { }

  async ngOnInit() {
    this.ptr_operadoresAll = await this.Ptr_operadoresService.getPtr_operadores();
  }

  obtenerPtr_operadores() {
    this.Ptr_operadoresService.getPtr_operadores()
    .then((response: any) => {
      this.ptr_operadoresAll = response.cont.ptr_operadoresAll;
    })
    .catch((error: any) => {
      Swal.fire({
        icon: "error",
        text: error.error.msg
      });
    });
  }

  actualizar(idPtr_operadores: any) {
    this.idPtr_operadores = idPtr_operadores;
    this.mostrarActualizar = true;
  }

  restableceRegistro(){
    this.mostrarActualizar = false;
    this.idPtr_operadores = 0;
            this.obtenerPtr_operadores();
        }

        eliminar(ptr_operadores: Ptr_operadoresModel)
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
                this.Ptr_operadoresService.deletePtr_operadores(ptr_operadores.idptr_operador)
                .then((response: any) => {
                    Swal.fire({
                    icon: "info",
            text: "Successfully removed"
                    });
            this.obtenerPtr_operadores();
        })
        .catch((error: any) => {
          Swal.fire({
            icon: "error",
            text: "Error updating Ptr_operadores."
          });
        })
      }
    })
  }


}