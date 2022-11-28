import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ptr_tipo_reglasModel } from '../../../../models/Ptr_tipo_reglas.model';
import { Ptr_tipo_reglasService } from '../../../../services/Ptr_tipo_reglas.service';
import Swal from 'sweetalert2';

@Component({
 selector: 'app-Ptr_tipo_reglas-detail',
  templateUrl: './Ptr_tipo_reglas-detail.component.html',
  styleUrls: ['./Ptr_tipo_reglas-detail.component.css']
})
export class Ptr_tipo_reglasDetailComponent implements OnInit {
@Input() idptr_tipo_regla: number = 0;
        isNew: boolean = false;

        ptr_tipo_reglas: Ptr_tipo_reglasModel = new Ptr_tipo_reglasModel();
            @Output() emitChange: EventEmitter < any > = new EventEmitter();
            constructor(private readonly Ptr_tipo_reglasService: Ptr_tipo_reglasService) { }

  ngOnInit() : void {
    
    this.isNew = !this.idptr_tipo_regla;

console.log(this.isNew);
    if(!this.isNew){
      this.Ptr_tipo_reglasService.getPtr_tipo_reglasById(this.idptr_tipo_regla)
        .then((response: any) => {
          this.ptr_tipo_reglas = response.cont.Ptr_tipo_reglas;
        })
        .catch(() => {});
    }
  }

  submitPtr_tipo_reglas(forma: NgForm){
    if (this.isNew)
    {
        this.Ptr_tipo_reglasService.postPtr_tipo_reglas(this.ptr_tipo_reglas)
        .then((response: any) => {
            Swal.fire({
            icon: "success",
        text: "Ptr_tipo_reglashas been successfully registered"
            });
            // forma.reset();
            this.emitChange.emit();
        })
    .catch ((error: any) => {
            Swal.fire({
            icon: "error",
        text: "An error has occurred to register Ptr_tipo_reglas"
            });
        });
        } else
        {

            this.Ptr_tipo_reglasService.putPtr_tipo_reglas(this.ptr_tipo_reglas, this.idptr_tipo_regla)
            .then((response: any) => {
                Swal.fire({
                icon: "success",
        text: "Ptr_tipo_reglashas been successfully updated."
                });
                this.emitChange.emit();
            })
    .catch ((error: any) => {
                Swal.fire({
                icon: "error",
        text: "An error has occurred to update Ptr_tipo_reglas"
                });
            });
            }

        }

        limpiarForm(forma: NgForm){
            forma.reset();
        }

    }
    