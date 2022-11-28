import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ptr_accionesModel } from '../models/Ptr_acciones.model';
import { Ptr_accionesService } from '../services/Ptr_acciones.service';
import Swal from 'sweetalert2';

@Component({
 selector: 'app-Ptr_acciones-detail',
  templateUrl: './Ptr_acciones-detail.component.html',
  styleUrls: ['./Ptr_acciones-detail.component.css']
})
export class Ptr_accionesDetailComponent implements OnInit {
@Input() idptr_accion: number = 0;
        isNew: boolean = false;

        ptr_acciones: Ptr_accionesModel = new Ptr_accionesModel();
            @Output() emitChange: EventEmitter < any > = new EventEmitter();
            constructor(private readonly Ptr_accionesService: Ptr_accionesService) { }

  ngOnInit() : void {
    
    this.isNew = !this.idptr_accion;

console.log(this.isNew);
    if(!this.isNew){
      this.Ptr_accionesService.getPtr_accionesById(this.idptr_accion)
        .then((response: any) => {
          this.ptr_acciones = response.cont.Ptr_acciones;
        })
        .catch(() => {});
    }
  }

  submitPtr_acciones(forma: NgForm){
    if (this.isNew)
    {
        this.Ptr_accionesService.postPtr_acciones(this.ptr_acciones)
        .then((response: any) => {
            Swal.fire({
            icon: "success",
        text: "Ptr_accioneshas been successfully registered"
            });
            // forma.reset();
            this.emitChange.emit();
        })
    .catch ((error: any) => {
            Swal.fire({
            icon: "error",
        text: "An error has occurred to register Ptr_acciones"
            });
        });
        } else
        {

            this.Ptr_accionesService.putPtr_acciones(this.ptr_acciones, this.idptr_accion)
            .then((response: any) => {
                Swal.fire({
                icon: "success",
        text: "Ptr_accioneshas been successfully updated."
                });
                this.emitChange.emit();
            })
    .catch ((error: any) => {
                Swal.fire({
                icon: "error",
        text: "An error has occurred to update Ptr_acciones"
                });
            });
            }

        }

        limpiarForm(forma: NgForm){
            forma.reset();
        }

    }
    