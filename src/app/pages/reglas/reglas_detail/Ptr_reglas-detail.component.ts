import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ptr_reglasModel } from '../../../../models/Ptr_reglas.model';
import { Ptr_reglasService } from '../../../../services/Ptr_reglas.service';
import Swal from 'sweetalert2';

@Component({
 selector: 'app-Ptr_reglas-detail',
  templateUrl: './Ptr_reglas-detail.component.html',
  styleUrls: ['./Ptr_reglas-detail.component.css']
})
export class Ptr_reglasDetailComponent implements OnInit {
@Input() idptr_regla: number = 0;
        isNew: boolean = false;

        ptr_reglas: Ptr_reglasModel = new Ptr_reglasModel();
            @Output() emitChange: EventEmitter < any > = new EventEmitter();
            constructor(private readonly Ptr_reglasService: Ptr_reglasService) { }

  ngOnInit() : void {
    
    this.isNew = !this.idptr_regla;

console.log(this.isNew);
    if(!this.isNew){
      this.Ptr_reglasService.getPtr_reglasById(this.idptr_regla)
        .then((response: any) => {
          this.ptr_reglas = response.cont.Ptr_reglas;
        })
        .catch(() => {});
    }
  }

  submitPtr_reglas(forma: NgForm){
    if (this.isNew)
    {
        this.Ptr_reglasService.postPtr_reglas(this.ptr_reglas)
        .then((response: any) => {
            Swal.fire({
            icon: "success",
        text: "Ptr_reglashas been successfully registered"
            });
            // forma.reset();
            this.emitChange.emit();
        })
    .catch ((error: any) => {
            Swal.fire({
            icon: "error",
        text: "An error has occurred to register Ptr_reglas"
            });
        });
        } else
        {

            this.Ptr_reglasService.putPtr_reglas(this.ptr_reglas, this.idptr_regla)
            .then((response: any) => {
                Swal.fire({
                icon: "success",
        text: "Ptr_reglashas been successfully updated."
                });
                this.emitChange.emit();
            })
    .catch ((error: any) => {
                Swal.fire({
                icon: "error",
        text: "An error has occurred to update Ptr_reglas"
                });
            });
            }

        }

        limpiarForm(forma: NgForm){
            forma.reset();
        }

    }
    