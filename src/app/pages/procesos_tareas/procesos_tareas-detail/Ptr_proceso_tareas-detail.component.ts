import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ptr_proceso_tareasModel } from '../../../../models/Ptr_proceso_tareas.model';
import { Ptr_proceso_tareasService } from '../../../../services/Ptr_proceso_tareas.service';
import Swal from 'sweetalert2';

@Component({
 selector: 'app-Ptr_proceso_tareas-detail',
  templateUrl: './Ptr_proceso_tareas-detail.component.html',
  styleUrls: ['./Ptr_proceso_tareas-detail.component.css']
})
export class Ptr_proceso_tareasDetailComponent implements OnInit {
@Input() idptr_proceso_tarea: number = 0;
        isNew: boolean = false;

        ptr_proceso_tareas: Ptr_proceso_tareasModel = new Ptr_proceso_tareasModel();
            @Output() emitChange: EventEmitter < any > = new EventEmitter();
            constructor(private readonly Ptr_proceso_tareasService: Ptr_proceso_tareasService) { }

  ngOnInit() : void {
    
    this.isNew = !this.idptr_proceso_tarea;

console.log(this.isNew);
    if(!this.isNew){
      this.Ptr_proceso_tareasService.getPtr_proceso_tareasById(this.idptr_proceso_tarea)
        .then((response: any) => {
          this.ptr_proceso_tareas = response.cont.Ptr_proceso_tareas;
        })
        .catch(() => {});
    }
  }

  submitPtr_proceso_tareas(forma: NgForm){
    if (this.isNew)
    {
        this.Ptr_proceso_tareasService.postPtr_proceso_tareas(this.ptr_proceso_tareas)
        .then((response: any) => {
            Swal.fire({
            icon: "success",
        text: "Ptr_proceso_tareashas been successfully registered"
            });
            // forma.reset();
            this.emitChange.emit();
        })
    .catch ((error: any) => {
            Swal.fire({
            icon: "error",
        text: "An error has occurred to register Ptr_proceso_tareas"
            });
        });
        } else
        {

            this.Ptr_proceso_tareasService.putPtr_proceso_tareas(this.ptr_proceso_tareas, this.idptr_proceso_tarea)
            .then((response: any) => {
                Swal.fire({
                icon: "success",
        text: "Ptr_proceso_tareashas been successfully updated."
                });
                this.emitChange.emit();
            })
    .catch ((error: any) => {
                Swal.fire({
                icon: "error",
        text: "An error has occurred to update Ptr_proceso_tareas"
                });
            });
            }

        }

        limpiarForm(forma: NgForm){
            forma.reset();
        }

    }
    