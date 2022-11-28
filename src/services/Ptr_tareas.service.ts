
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from '../environments/environment.prod';
import {Ptr_tareasModel} from '../models/Ptr_tareas.model';
@Injectable({
  providedIn: 'root'
})
export class Ptr_tareasService {

  PTR_DataBasEUrl: string = `${environment.baseUrl}/Ptr_tareas`;
  constructor(private readonly http: HttpClient) {}

  getPtr_tareasById(idptr_tarea: number) {
    return lastValueFrom(this.http.get<Ptr_tareasModel>(`${this.PTR_DataBasEUrl}/${idptr_tarea}`));
  }

  getPtr_tareas(): Promise<Ptr_tareasModel[]> {
    return lastValueFrom(this.http.get<Ptr_tareasModel[]>(`${this.PTR_DataBasEUrl}`));
  }

  postPtr_tareas(ptr_tareas: Ptr_tareasModel) {
    
    return lastValueFrom(this.http.post(`${this.PTR_DataBasEUrl}`, ptr_tareas));
  }
  putPtr_tareas(ptr_tareas: Ptr_tareasModel, idptr_tarea: number) { 
    return lastValueFrom(this.http.put(`${this.PTR_DataBasEUrl}`, ptr_tareas));
  }

  deletePtr_tareas(idptr_tarea: any) {
    return lastValueFrom(this.http.delete(`${this.PTR_DataBasEUrl}/${idptr_tarea}`));
  }
}