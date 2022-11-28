import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ptr_procesosModel } from '../models/Ptr_procesos.model';
import { Ptr_procesosService } from '../services/Ptr_procesos.service';
import Swal from 'sweetalert2';

@Component({
 selector: 'app-Ptr_procesos-detail',
  templateUrl: './Ptr_procesos-detail.component.html',
  styleUrls: ['./Ptr_procesos-detail.component.css']
})
export class Ptr_procesosDetailComponent implements OnInit {
@Input() idptr_proceso: number = 0;
        isNew: boolean = false;

        ptr_procesos: Ptr_procesosModel = new Ptr_procesosModel();
            @Output() emitChange: EventEmitter < any > = new EventEmitter();
            constructor(private readonly Ptr_procesosService: Ptr_procesosService) { }

  ngOnInit() : void {
    
    this.isNew = !this.idptr_proceso;

console.log(this.isNew);
    if(!this.isNew){
      this.Ptr_procesosService.getPtr_procesosById(this.idptr_proceso)
        .then((response: any) => {
          this.ptr_procesos = response.cont.Ptr_procesos;
        })
        .catch(() => {});
    }
  }

  submitPtr_procesos(forma: NgForm){
    if (this.isNew)
    {
        this.Ptr_procesosService.postPtr_procesos(this.ptr_procesos)
        .then((response: any) => {
            Swal.fire({
            icon: "success",
        text: "Ptr_procesoshas been successfully registered"
            });
            // forma.reset();
            this.emitChange.emit();
        })
    .catch ((error: any) => {
            Swal.fire({
            icon: "error",
        text: "An error has occurred to register Ptr_procesos"
            });
        });
        } else
        {

            this.Ptr_procesosService.putPtr_procesos(this.ptr_procesos, this.idptr_proceso)
            .then((response: any) => {
                Swal.fire({
                icon: "success",
        text: "Ptr_procesoshas been successfully updated."
                });
                this.emitChange.emit();
            })
    .catch ((error: any) => {
                Swal.fire({
                icon: "error",
        text: "An error has occurred to update Ptr_procesos"
                });
            });
            }

        }

        limpiarForm(forma: NgForm){
            forma.reset();
        }

    }
    