
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from '../environments/environment.prod';
import {Ptr_procesosModel} from '../models/Ptr_procesos.model';
@Injectable({
  providedIn: 'root'
})
export class Ptr_procesosService {

  PTR_DataBasEUrl: string = `${environment.baseUrl}/Ptr_procesos`;
  constructor(private readonly http: HttpClient) {}

  getPtr_procesosById(idptr_proceso: number) {
    return lastValueFrom(this.http.get<Ptr_procesosModel>(`${this.PTR_DataBasEUrl}/${idptr_proceso}`));
  }

  getPtr_procesos(): Promise<Ptr_procesosModel[]> {
    return lastValueFrom(this.http.get<Ptr_procesosModel[]>(`${this.PTR_DataBasEUrl}`));
  }

  postPtr_procesos(ptr_procesos: Ptr_procesosModel) {
    
    return lastValueFrom(this.http.post(`${this.PTR_DataBasEUrl}`, ptr_procesos));
  }
  putPtr_procesos(ptr_procesos: Ptr_procesosModel, idptr_proceso: number) { 
    return lastValueFrom(this.http.put(`${this.PTR_DataBasEUrl}`, ptr_procesos));
  }

  deletePtr_procesos(idptr_proceso: any) {
    return lastValueFrom(this.http.delete(`${this.PTR_DataBasEUrl}/${idptr_proceso}`));
  }
}