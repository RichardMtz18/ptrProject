
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from '../environments/environment.prod';
import {Ptr_accionesModel} from '../models/Ptr_acciones.model';
@Injectable({
  providedIn: 'root'
})
export class Ptr_accionesService {

  PTR_DataBasEUrl: string = `${environment.baseUrl}/Ptr_acciones`;
  constructor(private readonly http: HttpClient) {}

  getPtr_accionesById(idptr_accion: number) {
    return lastValueFrom(this.http.get<Ptr_accionesModel>(`${this.PTR_DataBasEUrl}/${idptr_accion}`));
  }

  getPtr_acciones(): Promise<Ptr_accionesModel[]> {
    return lastValueFrom(this.http.get<Ptr_accionesModel[]>(`${this.PTR_DataBasEUrl}`));
  }

  postPtr_acciones(ptr_acciones: Ptr_accionesModel) {
    
    return lastValueFrom(this.http.post(`${this.PTR_DataBasEUrl}`, ptr_acciones));
  }
  putPtr_acciones(ptr_acciones: Ptr_accionesModel, idptr_accion: number) { 
    return lastValueFrom(this.http.put(`${this.PTR_DataBasEUrl}`, ptr_acciones));
  }

  deletePtr_acciones(idptr_accion: any) {
    return lastValueFrom(this.http.delete(`${this.PTR_DataBasEUrl}/${idptr_accion}`));
  }
}