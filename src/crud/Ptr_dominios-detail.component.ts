import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ptr_dominiosModel } from '../models/Ptr_dominios.model';
import { Ptr_dominiosService } from '../services/Ptr_dominios.service';
import Swal from 'sweetalert2';

@Component({
 selector: 'app-Ptr_dominios-detail',
  templateUrl: './Ptr_dominios-detail.component.html',
  styleUrls: ['./Ptr_dominios-detail.component.css']
})
export class Ptr_dominiosDetailComponent implements OnInit {
@Input() idptr_dominio: number = 0;
        isNew: boolean = false;

        ptr_dominios: Ptr_dominiosModel = new Ptr_dominiosModel();
            @Output() emitChange: EventEmitter < any > = new EventEmitter();
            constructor(private readonly Ptr_dominiosService: Ptr_dominiosService) { }

  ngOnInit() : void {
    
    this.isNew = !this.idptr_dominio;

console.log(this.isNew);
    if(!this.isNew){
      this.Ptr_dominiosService.getPtr_dominiosById(this.idptr_dominio)
        .then((response: any) => {
          this.ptr_dominios = response.cont.Ptr_dominios;
        })
        .catch(() => {});
    }
  }

  submitPtr_dominios(forma: NgForm){
    if (this.isNew)
    {
        this.Ptr_dominiosService.postPtr_dominios(this.ptr_dominios)
        .then((response: any) => {
            Swal.fire({
            icon: "success",
        text: "Ptr_dominioshas been successfully registered"
            });
            // forma.reset();
            this.emitChange.emit();
        })
    .catch ((error: any) => {
            Swal.fire({
            icon: "error",
        text: "An error has occurred to register Ptr_dominios"
            });
        });
        } else
        {

            this.Ptr_dominiosService.putPtr_dominios(this.ptr_dominios, this.idptr_dominio)
            .then((response: any) => {
                Swal.fire({
                icon: "success",
        text: "Ptr_dominioshas been successfully updated."
                });
                this.emitChange.emit();
            })
    .catch ((error: any) => {
                Swal.fire({
                icon: "error",
        text: "An error has occurred to update Ptr_dominios"
                });
            });
            }

        }

        limpiarForm(forma: NgForm){
            forma.reset();
        }

    }
    