import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ptr_tipo_dominiosModel } from '../models/Ptr_tipo_dominios.model';
import { Ptr_tipo_dominiosService } from '../services/Ptr_tipo_dominios.service';
import Swal from 'sweetalert2';

@Component({
 selector: 'app-Ptr_tipo_dominios-detail',
  templateUrl: './Ptr_tipo_dominios-detail.component.html',
  styleUrls: ['./Ptr_tipo_dominios-detail.component.css']
})
export class Ptr_tipo_dominiosDetailComponent implements OnInit {
@Input() idptr_tipo_dominio: number = 0;
        isNew: boolean = false;

        ptr_tipo_dominios: Ptr_tipo_dominiosModel = new Ptr_tipo_dominiosModel();
            @Output() emitChange: EventEmitter < any > = new EventEmitter();
            constructor(private readonly Ptr_tipo_dominiosService: Ptr_tipo_dominiosService) { }

  ngOnInit() : void {
    
    this.isNew = !this.idptr_tipo_dominio;

console.log(this.isNew);
    if(!this.isNew){
      this.Ptr_tipo_dominiosService.getPtr_tipo_dominiosById(this.idptr_tipo_dominio)
        .then((response: any) => {
          this.ptr_tipo_dominios = response.cont.Ptr_tipo_dominios;
        })
        .catch(() => {});
    }
  }

  submitPtr_tipo_dominios(forma: NgForm){
    if (this.isNew)
    {
        this.Ptr_tipo_dominiosService.postPtr_tipo_dominios(this.ptr_tipo_dominios)
        .then((response: any) => {
            Swal.fire({
            icon: "success",
        text: "Ptr_tipo_dominioshas been successfully registered"
            });
            // forma.reset();
            this.emitChange.emit();
        })
    .catch ((error: any) => {
            Swal.fire({
            icon: "error",
        text: "An error has occurred to register Ptr_tipo_dominios"
            });
        });
        } else
        {

            this.Ptr_tipo_dominiosService.putPtr_tipo_dominios(this.ptr_tipo_dominios, this.idptr_tipo_dominio)
            .then((response: any) => {
                Swal.fire({
                icon: "success",
        text: "Ptr_tipo_dominioshas been successfully updated."
                });
                this.emitChange.emit();
            })
    .catch ((error: any) => {
                Swal.fire({
                icon: "error",
        text: "An error has occurred to update Ptr_tipo_dominios"
                });
            });
            }

        }

        limpiarForm(forma: NgForm){
            forma.reset();
        }

    }
    