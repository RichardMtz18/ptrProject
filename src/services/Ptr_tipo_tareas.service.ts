
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from '../environments/environment.prod';
import {Ptr_tipo_tareasModel} from '../models/Ptr_tipo_tareas.model';
@Injectable({
  providedIn: 'root'
})
export class Ptr_tipo_tareasService {

  PTR_DataBasEUrl: string = `${environment.baseUrl}/Ptr_tipo_tareas`;
  constructor(private readonly http: HttpClient) {}

  getPtr_tipo_tareasById(idptr_tipo_tarea: number) {
    return lastValueFrom(this.http.get<Ptr_tipo_tareasModel>(`${this.PTR_DataBasEUrl}/${idptr_tipo_tarea}`));
  }

  getPtr_tipo_tareas(): Promise<Ptr_tipo_tareasModel[]> {
    return lastValueFrom(this.http.get<Ptr_tipo_tareasModel[]>(`${this.PTR_DataBasEUrl}`));
  }

  postPtr_tipo_tareas(ptr_tipo_tareas: Ptr_tipo_tareasModel) {
    
    return lastValueFrom(this.http.post(`${this.PTR_DataBasEUrl}`, ptr_tipo_tareas));
  }
  putPtr_tipo_tareas(ptr_tipo_tareas: Ptr_tipo_tareasModel, idptr_tipo_tarea: number) { 
    return lastValueFrom(this.http.put(`${this.PTR_DataBasEUrl}`, ptr_tipo_tareas));
  }

  deletePtr_tipo_tareas(idptr_tipo_tarea: any) {
    return lastValueFrom(this.http.delete(`${this.PTR_DataBasEUrl}/${idptr_tipo_tarea}`));
  }
}