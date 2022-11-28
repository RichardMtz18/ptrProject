import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ptr_objetosModel } from '../../../../models/Ptr_objetos.model';
import { Ptr_objetosService } from '../../../../services/Ptr_objetos.service';
import Swal from 'sweetalert2';

@Component({
 selector: 'app-Ptr_objetos-detail',
  templateUrl: './Ptr_objetos-detail.component.html',
  styleUrls: ['./Ptr_objetos-detail.component.css']
})
export class Ptr_objetosDetailComponent implements OnInit {
@Input() idptr_objeto: number = 0;
        isNew: boolean = false;

        ptr_objetos: Ptr_objetosModel = new Ptr_objetosModel();
            @Output() emitChange: EventEmitter < any > = new EventEmitter();
            constructor(private readonly Ptr_objetosService: Ptr_objetosService) { }

  ngOnInit() : void {
    
    this.isNew = !this.idptr_objeto;

console.log(this.isNew);
    if(!this.isNew){
      this.Ptr_objetosService.getPtr_objetosById(this.idptr_objeto)
        .then((response: any) => {
          this.ptr_objetos = response.cont.Ptr_objetos;
        })
        .catch(() => {});
    }
  }

  submitPtr_objetos(forma: NgForm){
    if (this.isNew)
    {
        this.Ptr_objetosService.postPtr_objetos(this.ptr_objetos)
        .then((response: any) => {
            Swal.fire({
            icon: "success",
        text: "Ptr_objetoshas been successfully registered"
            });
            // forma.reset();
            this.emitChange.emit();
        })
    .catch ((error: any) => {
            Swal.fire({
            icon: "error",
        text: "An error has occurred to register Ptr_objetos"
            });
        });
        } else
        {

            this.Ptr_objetosService.putPtr_objetos(this.ptr_objetos, this.idptr_objeto)
            .then((response: any) => {
                Swal.fire({
                icon: "success",
        text: "Ptr_objetoshas been successfully updated."
                });
                this.emitChange.emit();
            })
    .catch ((error: any) => {
                Swal.fire({
                icon: "error",
        text: "An error has occurred to update Ptr_objetos"
                });
            });
            }

        }

        limpiarForm(forma: NgForm){
            forma.reset();
        }

    }
    