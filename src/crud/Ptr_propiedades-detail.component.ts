import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ptr_propiedadesModel } from '../models/Ptr_propiedades.model';
import { Ptr_propiedadesService } from '../services/Ptr_propiedades.service';
import Swal from 'sweetalert2';

@Component({
 selector: 'app-Ptr_propiedades-detail',
  templateUrl: './Ptr_propiedades-detail.component.html',
  styleUrls: ['./Ptr_propiedades-detail.component.css']
})
export class Ptr_propiedadesDetailComponent implements OnInit {
@Input() idptr_propiedad: number = 0;
        isNew: boolean = false;

        ptr_propiedades: Ptr_propiedadesModel = new Ptr_propiedadesModel();
            @Output() emitChange: EventEmitter < any > = new EventEmitter();
            constructor(private readonly Ptr_propiedadesService: Ptr_propiedadesService) { }

  ngOnInit() : void {
    
    this.isNew = !this.idptr_propiedad;

console.log(this.isNew);
    if(!this.isNew){
      this.Ptr_propiedadesService.getPtr_propiedadesById(this.idptr_propiedad)
        .then((response: any) => {
          this.ptr_propiedades = response.cont.Ptr_propiedades;
        })
        .catch(() => {});
    }
  }

  submitPtr_propiedades(forma: NgForm){
    if (this.isNew)
    {
        this.Ptr_propiedadesService.postPtr_propiedades(this.ptr_propiedades)
        .then((response: any) => {
            Swal.fire({
            icon: "success",
        text: "Ptr_propiedadeshas been successfully registered"
            });
            // forma.reset();
            this.emitChange.emit();
        })
    .catch ((error: any) => {
            Swal.fire({
            icon: "error",
        text: "An error has occurred to register Ptr_propiedades"
            });
        });
        } else
        {

            this.Ptr_propiedadesService.putPtr_propiedades(this.ptr_propiedades, this.idptr_propiedad)
            .then((response: any) => {
                Swal.fire({
                icon: "success",
        text: "Ptr_propiedadeshas been successfully updated."
                });
                this.emitChange.emit();
            })
    .catch ((error: any) => {
                Swal.fire({
                icon: "error",
        text: "An error has occurred to update Ptr_propiedades"
                });
            });
            }

        }

        limpiarForm(forma: NgForm){
            forma.reset();
        }

    }
    