import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ptr_tipo_tareasModel } from '../../../../models/Ptr_tipo_tareas.model';
import { Ptr_tipo_tareasService } from '../../../../services/Ptr_tipo_tareas.service';
import Swal from 'sweetalert2';

@Component({
 selector: 'app-Ptr_tipo_tareas-detail',
  templateUrl: './Ptr_tipo_tareas-detail.component.html',
  styleUrls: ['./Ptr_tipo_tareas-detail.component.css']
})
export class Ptr_tipo_tareasDetailComponent implements OnInit {
@Input() idptr_tipo_tarea: number = 0;
        isNew: boolean = false;

        ptr_tipo_tareas: Ptr_tipo_tareasModel = new Ptr_tipo_tareasModel();
            @Output() emitChange: EventEmitter < any > = new EventEmitter();
            constructor(private readonly Ptr_tipo_tareasService: Ptr_tipo_tareasService) { }

  ngOnInit() : void {
    
    this.isNew = !this.idptr_tipo_tarea;

console.log(this.isNew);
    if(!this.isNew){
      this.Ptr_tipo_tareasService.getPtr_tipo_tareasById(this.idptr_tipo_tarea)
        .then((response: any) => {
          this.ptr_tipo_tareas = response.cont.Ptr_tipo_tareas;
        })
        .catch(() => {});
    }
  }

  submitPtr_tipo_tareas(forma: NgForm){
    if (this.isNew)
    {
        this.Ptr_tipo_tareasService.postPtr_tipo_tareas(this.ptr_tipo_tareas)
        .then((response: any) => {
            Swal.fire({
            icon: "success",
        text: "Ptr_tipo_tareashas been successfully registered"
            });
            // forma.reset();
            this.emitChange.emit();
        })
    .catch ((error: any) => {
            Swal.fire({
            icon: "error",
        text: "An error has occurred to register Ptr_tipo_tareas"
            });
        });
        } else
        {

            this.Ptr_tipo_tareasService.putPtr_tipo_tareas(this.ptr_tipo_tareas, this.idptr_tipo_tarea)
            .then((response: any) => {
                Swal.fire({
                icon: "success",
        text: "Ptr_tipo_tareashas been successfully updated."
                });
                this.emitChange.emit();
            })
    .catch ((error: any) => {
                Swal.fire({
                icon: "error",
        text: "An error has occurred to update Ptr_tipo_tareas"
                });
            });
            }

        }

        limpiarForm(forma: NgForm){
            forma.reset();
        }

    }
    