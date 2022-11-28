import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ptr_sentenciasModel } from '../models/Ptr_sentencias.model';
import { Ptr_sentenciasService } from '../services/Ptr_sentencias.service';
import Swal from 'sweetalert2';

@Component({
 selector: 'app-Ptr_sentencias-detail',
  templateUrl: './Ptr_sentencias-detail.component.html',
  styleUrls: ['./Ptr_sentencias-detail.component.css']
})
export class Ptr_sentenciasDetailComponent implements OnInit {
@Input() idptr_tipo_sentencia: number = 0;
        isNew: boolean = false;

        ptr_sentencias: Ptr_sentenciasModel = new Ptr_sentenciasModel();
            @Output() emitChange: EventEmitter < any > = new EventEmitter();
            constructor(private readonly Ptr_sentenciasService: Ptr_sentenciasService) { }

  ngOnInit() : void {
    
    this.isNew = !this.idptr_tipo_sentencia;

console.log(this.isNew);
    if(!this.isNew){
      this.Ptr_sentenciasService.getPtr_sentenciasById(this.idptr_tipo_sentencia)
        .then((response: any) => {
          this.ptr_sentencias = response.cont.Ptr_sentencias;
        })
        .catch(() => {});
    }
  }

  submitPtr_sentencias(forma: NgForm){
    if (this.isNew)
    {
        this.Ptr_sentenciasService.postPtr_sentencias(this.ptr_sentencias)
        .then((response: any) => {
            Swal.fire({
            icon: "success",
        text: "Ptr_sentenciashas been successfully registered"
            });
            // forma.reset();
            this.emitChange.emit();
        })
    .catch ((error: any) => {
            Swal.fire({
            icon: "error",
        text: "An error has occurred to register Ptr_sentencias"
            });
        });
        } else
        {

            this.Ptr_sentenciasService.putPtr_sentencias(this.ptr_sentencias, this.idptr_tipo_sentencia)
            .then((response: any) => {
                Swal.fire({
                icon: "success",
        text: "Ptr_sentenciashas been successfully updated."
                });
                this.emitChange.emit();
            })
    .catch ((error: any) => {
                Swal.fire({
                icon: "error",
        text: "An error has occurred to update Ptr_sentencias"
                });
            });
            }

        }

        limpiarForm(forma: NgForm){
            forma.reset();
        }

    }
    