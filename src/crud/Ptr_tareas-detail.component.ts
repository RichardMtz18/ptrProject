import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ptr_tareasModel } from '../models/Ptr_tareas.model';
import { Ptr_tareasService } from '../services/Ptr_tareas.service';
import Swal from 'sweetalert2';

@Component({
 selector: 'app-Ptr_tareas-detail',
  templateUrl: './Ptr_tareas-detail.component.html',
  styleUrls: ['./Ptr_tareas-detail.component.css']
})
export class Ptr_tareasDetailComponent implements OnInit {
@Input() idptr_tarea: number = 0;
        isNew: boolean = false;

        ptr_tareas: Ptr_tareasModel = new Ptr_tareasModel();
            @Output() emitChange: EventEmitter < any > = new EventEmitter();
            constructor(private readonly Ptr_tareasService: Ptr_tareasService) { }

  ngOnInit() : void {
    
    this.isNew = !this.idptr_tarea;

console.log(this.isNew);
    if(!this.isNew){
      this.Ptr_tareasService.getPtr_tareasById(this.idptr_tarea)
        .then((response: any) => {
          this.ptr_tareas = response.cont.Ptr_tareas;
        })
        .catch(() => {});
    }
  }

  submitPtr_tareas(forma: NgForm){
    if (this.isNew)
    {
        this.Ptr_tareasService.postPtr_tareas(this.ptr_tareas)
        .then((response: any) => {
            Swal.fire({
            icon: "success",
        text: "Ptr_tareashas been successfully registered"
            });
            // forma.reset();
            this.emitChange.emit();
        })
    .catch ((error: any) => {
            Swal.fire({
            icon: "error",
        text: "An error has occurred to register Ptr_tareas"
            });
        });
        } else
        {

            this.Ptr_tareasService.putPtr_tareas(this.ptr_tareas, this.idptr_tarea)
            .then((response: any) => {
                Swal.fire({
                icon: "success",
        text: "Ptr_tareashas been successfully updated."
                });
                this.emitChange.emit();
            })
    .catch ((error: any) => {
                Swal.fire({
                icon: "error",
        text: "An error has occurred to update Ptr_tareas"
                });
            });
            }

        }

        limpiarForm(forma: NgForm){
            forma.reset();
        }

    }
    