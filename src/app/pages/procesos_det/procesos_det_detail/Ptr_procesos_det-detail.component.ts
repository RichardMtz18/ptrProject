import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ptr_procesos_detModel } from '../../../../models/Ptr_procesos_det.model';
import { Ptr_procesos_detService } from '../../../../services/Ptr_procesos_det.service';
import Swal from 'sweetalert2';

@Component({
 selector: 'app-Ptr_procesos_det-detail',
  templateUrl: './Ptr_procesos_det-detail.component.html',
  styleUrls: ['./Ptr_procesos_det-detail.component.css']
})
export class Ptr_procesos_detDetailComponent implements OnInit {
@Input() id: number = 0;
        isNew: boolean = false;

        ptr_procesos_det: Ptr_procesos_detModel = new Ptr_procesos_detModel();
            @Output() emitChange: EventEmitter < any > = new EventEmitter();
            constructor(private readonly Ptr_procesos_detService: Ptr_procesos_detService) { }

  ngOnInit() : void {
    
    this.isNew = !this.id;

console.log(this.isNew);
    if(!this.isNew){
      this.Ptr_procesos_detService.getPtr_procesos_detById(this.id)
        .then((response: any) => {
          this.ptr_procesos_det = response.cont.Ptr_procesos_det;
        })
        .catch(() => {});
    }
  }

  submitPtr_procesos_det(forma: NgForm){
    if (this.isNew)
    {
        this.Ptr_procesos_detService.postPtr_procesos_det(this.ptr_procesos_det)
        .then((response: any) => {
            Swal.fire({
            icon: "success",
        text: "Ptr_procesos_dethas been successfully registered"
            });
            // forma.reset();
            this.emitChange.emit();
        })
    .catch ((error: any) => {
            Swal.fire({
            icon: "error",
        text: "An error has occurred to register Ptr_procesos_det"
            });
        });
        } else
        {

            this.Ptr_procesos_detService.putPtr_procesos_det(this.ptr_procesos_det, this.id)
            .then((response: any) => {
                Swal.fire({
                icon: "success",
        text: "Ptr_procesos_dethas been successfully updated."
                });
                this.emitChange.emit();
            })
    .catch ((error: any) => {
                Swal.fire({
                icon: "error",
        text: "An error has occurred to update Ptr_procesos_det"
                });
            });
            }

        }

        limpiarForm(forma: NgForm){
            forma.reset();
        }

    }
    