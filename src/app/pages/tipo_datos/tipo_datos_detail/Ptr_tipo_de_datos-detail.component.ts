import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ptr_tipo_de_datosModel } from '../../../../models/Ptr_tipo_de_datos.model';
import { Ptr_tipo_de_datosService } from '../../../../services/Ptr_tipo_de_datos.service';
import Swal from 'sweetalert2';

@Component({
 selector: 'app-Ptr_tipo_de_datos-detail',
  templateUrl: './Ptr_tipo_de_datos-detail.component.html',
  styleUrls: ['./Ptr_tipo_de_datos-detail.component.css']
})
export class Ptr_tipo_de_datosDetailComponent implements OnInit {
@Input() idptr_tipo_de_dato: number = 0;
        isNew: boolean = false;

        ptr_tipo_de_datos: Ptr_tipo_de_datosModel = new Ptr_tipo_de_datosModel();
            @Output() emitChange: EventEmitter < any > = new EventEmitter();
            constructor(private readonly Ptr_tipo_de_datosService: Ptr_tipo_de_datosService) { }

  ngOnInit() : void {
    
    this.isNew = !this.idptr_tipo_de_dato;

console.log(this.isNew);
    if(!this.isNew){
      this.Ptr_tipo_de_datosService.getPtr_tipo_de_datosById(this.idptr_tipo_de_dato)
        .then((response: any) => {
          this.ptr_tipo_de_datos = response.cont.Ptr_tipo_de_datos;
        })
        .catch(() => {});
    }
  }

  submitPtr_tipo_de_datos(forma: NgForm){
    if (this.isNew)
    {
        this.Ptr_tipo_de_datosService.postPtr_tipo_de_datos(this.ptr_tipo_de_datos)
        .then((response: any) => {
            Swal.fire({
            icon: "success",
        text: "Ptr_tipo_de_datoshas been successfully registered"
            });
            // forma.reset();
            this.emitChange.emit();
        })
    .catch ((error: any) => {
            Swal.fire({
            icon: "error",
        text: "An error has occurred to register Ptr_tipo_de_datos"
            });
        });
        } else
        {

            this.Ptr_tipo_de_datosService.putPtr_tipo_de_datos(this.ptr_tipo_de_datos, this.idptr_tipo_de_dato)
            .then((response: any) => {
                Swal.fire({
                icon: "success",
        text: "Ptr_tipo_de_datoshas been successfully updated."
                });
                this.emitChange.emit();
            })
    .catch ((error: any) => {
                Swal.fire({
                icon: "error",
        text: "An error has occurred to update Ptr_tipo_de_datos"
                });
            });
            }

        }

        limpiarForm(forma: NgForm){
            forma.reset();
        }

    }
    