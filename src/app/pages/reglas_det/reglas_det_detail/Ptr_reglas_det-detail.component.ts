import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ptr_reglas_detModel } from '../../../../models/Ptr_reglas_det.model';
import { Ptr_reglas_detService } from '../../../../services/Ptr_reglas_det.service';
import Swal from 'sweetalert2';

@Component({
 selector: 'app-Ptr_reglas_det-detail',
  templateUrl: './Ptr_reglas_det-detail.component.html',
  styleUrls: ['./Ptr_reglas_det-detail.component.css']
})
export class Ptr_reglas_detDetailComponent implements OnInit {
@Input() idptr_regla_det: number = 0;
        isNew: boolean = false;

        ptr_reglas_det: Ptr_reglas_detModel = new Ptr_reglas_detModel();
            @Output() emitChange: EventEmitter < any > = new EventEmitter();
            constructor(private readonly Ptr_reglas_detService: Ptr_reglas_detService) { }

  ngOnInit() : void {
    
    this.isNew = !this.idptr_regla_det;

console.log(this.isNew);
    if(!this.isNew){
      this.Ptr_reglas_detService.getPtr_reglas_detById(this.idptr_regla_det)
        .then((response: any) => {
          this.ptr_reglas_det = response.cont.Ptr_reglas_det;
        })
        .catch(() => {});
    }
  }

  submitPtr_reglas_det(forma: NgForm){
    if (this.isNew)
    {
        this.Ptr_reglas_detService.postPtr_reglas_det(this.ptr_reglas_det)
        .then((response: any) => {
            Swal.fire({
            icon: "success",
        text: "Ptr_reglas_dethas been successfully registered"
            });
            // forma.reset();
            this.emitChange.emit();
        })
    .catch ((error: any) => {
            Swal.fire({
            icon: "error",
        text: "An error has occurred to register Ptr_reglas_det"
            });
        });
        } else
        {

            this.Ptr_reglas_detService.putPtr_reglas_det(this.ptr_reglas_det, this.idptr_regla_det)
            .then((response: any) => {
                Swal.fire({
                icon: "success",
        text: "Ptr_reglas_dethas been successfully updated."
                });
                this.emitChange.emit();
            })
    .catch ((error: any) => {
                Swal.fire({
                icon: "error",
        text: "An error has occurred to update Ptr_reglas_det"
                });
            });
            }

        }

        limpiarForm(forma: NgForm){
            forma.reset();
        }

    }
    