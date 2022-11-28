import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ptr_tarea_reglasModel } from '../models/Ptr_tarea_reglas.model';
import { Ptr_tarea_reglasService } from '../services/Ptr_tarea_reglas.service';
import Swal from 'sweetalert2';

@Component({
 selector: 'app-Ptr_tarea_reglas-detail',
  templateUrl: './Ptr_tarea_reglas-detail.component.html',
  styleUrls: ['./Ptr_tarea_reglas-detail.component.css']
})
export class Ptr_tarea_reglasDetailComponent implements OnInit {
@Input() idptr_tarea_regla: number = 0;
        isNew: boolean = false;

        ptr_tarea_reglas: Ptr_tarea_reglasModel = new Ptr_tarea_reglasModel();
            @Output() emitChange: EventEmitter < any > = new EventEmitter();
            constructor(private readonly Ptr_tarea_reglasService: Ptr_tarea_reglasService) { }

  ngOnInit() : void {
    
    this.isNew = !this.idptr_tarea_regla;

console.log(this.isNew);
    if(!this.isNew){
      this.Ptr_tarea_reglasService.getPtr_tarea_reglasById(this.idptr_tarea_regla)
        .then((response: any) => {
          this.ptr_tarea_reglas = response.cont.Ptr_tarea_reglas;
        })
        .catch(() => {});
    }
  }

  submitPtr_tarea_reglas(forma: NgForm){
    if (this.isNew)
    {
        this.Ptr_tarea_reglasService.postPtr_tarea_reglas(this.ptr_tarea_reglas)
        .then((response: any) => {
            Swal.fire({
            icon: "success",
        text: "Ptr_tarea_reglashas been successfully registered"
            });
            // forma.reset();
            this.emitChange.emit();
        })
    .catch ((error: any) => {
            Swal.fire({
            icon: "error",
        text: "An error has occurred to register Ptr_tarea_reglas"
            });
        });
        } else
        {

            this.Ptr_tarea_reglasService.putPtr_tarea_reglas(this.ptr_tarea_reglas, this.idptr_tarea_regla)
            .then((response: any) => {
                Swal.fire({
                icon: "success",
        text: "Ptr_tarea_reglashas been successfully updated."
                });
                this.emitChange.emit();
            })
    .catch ((error: any) => {
                Swal.fire({
                icon: "error",
        text: "An error has occurred to update Ptr_tarea_reglas"
                });
            });
            }

        }

        limpiarForm(forma: NgForm){
            forma.reset();
        }

    }
    