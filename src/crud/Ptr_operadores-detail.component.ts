import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ptr_operadoresModel } from '../models/Ptr_operadores.model';
import { Ptr_operadoresService } from '../services/Ptr_operadores.service';
import Swal from 'sweetalert2';

@Component({
 selector: 'app-Ptr_operadores-detail',
  templateUrl: './Ptr_operadores-detail.component.html',
  styleUrls: ['./Ptr_operadores-detail.component.css']
})
export class Ptr_operadoresDetailComponent implements OnInit {
@Input() idptr_operador: number = 0;
        isNew: boolean = false;

        ptr_operadores: Ptr_operadoresModel = new Ptr_operadoresModel();
            @Output() emitChange: EventEmitter < any > = new EventEmitter();
            constructor(private readonly Ptr_operadoresService: Ptr_operadoresService) { }

  ngOnInit() : void {
    
    this.isNew = !this.idptr_operador;

console.log(this.isNew);
    if(!this.isNew){
      this.Ptr_operadoresService.getPtr_operadoresById(this.idptr_operador)
        .then((response: any) => {
          this.ptr_operadores = response.cont.Ptr_operadores;
        })
        .catch(() => {});
    }
  }

  submitPtr_operadores(forma: NgForm){
    if (this.isNew)
    {
        this.Ptr_operadoresService.postPtr_operadores(this.ptr_operadores)
        .then((response: any) => {
            Swal.fire({
            icon: "success",
        text: "Ptr_operadoreshas been successfully registered"
            });
            // forma.reset();
            this.emitChange.emit();
        })
    .catch ((error: any) => {
            Swal.fire({
            icon: "error",
        text: "An error has occurred to register Ptr_operadores"
            });
        });
        } else
        {

            this.Ptr_operadoresService.putPtr_operadores(this.ptr_operadores, this.idptr_operador)
            .then((response: any) => {
                Swal.fire({
                icon: "success",
        text: "Ptr_operadoreshas been successfully updated."
                });
                this.emitChange.emit();
            })
    .catch ((error: any) => {
                Swal.fire({
                icon: "error",
        text: "An error has occurred to update Ptr_operadores"
                });
            });
            }

        }

        limpiarForm(forma: NgForm){
            forma.reset();
        }

    }
    