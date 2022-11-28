
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from '../environments/environment.prod';
import {Ptr_proceso_tareasModel} from '../models/Ptr_proceso_tareas.model';
@Injectable({
  providedIn: 'root'
})
export class Ptr_proceso_tareasService {

  PTR_DataBasEUrl: string = `${environment.baseUrl}/Ptr_proceso_tareas`;
  constructor(private readonly http: HttpClient) {}

  getPtr_proceso_tareasById(idptr_proceso_tarea: number) {
    return lastValueFrom(this.http.get<Ptr_proceso_tareasModel>(`${this.PTR_DataBasEUrl}/${idptr_proceso_tarea}`));
  }

  getPtr_proceso_tareas(): Promise<Ptr_proceso_tareasModel[]> {
    return lastValueFrom(this.http.get<Ptr_proceso_tareasModel[]>(`${this.PTR_DataBasEUrl}`));
  }

  postPtr_proceso_tareas(ptr_proceso_tareas: Ptr_proceso_tareasModel) {
    
    return lastValueFrom(this.http.post(`${this.PTR_DataBasEUrl}`, ptr_proceso_tareas));
  }
  putPtr_proceso_tareas(ptr_proceso_tareas: Ptr_proceso_tareasModel, idptr_proceso_tarea: number) { 
    return lastValueFrom(this.http.put(`${this.PTR_DataBasEUrl}`, ptr_proceso_tareas));
  }

  deletePtr_proceso_tareas(idptr_proceso_tarea: any) {
    return lastValueFrom(this.http.delete(`${this.PTR_DataBasEUrl}/${idptr_proceso_tarea}`));
  }
}