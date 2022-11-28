
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from '../environments/environment.prod';
import {Ptr_tarea_reglasModel} from '../models/Ptr_tarea_reglas.model';
@Injectable({
  providedIn: 'root'
})
export class Ptr_tarea_reglasService {

  PTR_DataBasEUrl: string = `${environment.baseUrl}/Ptr_tarea_reglas`;
  constructor(private readonly http: HttpClient) {}

  getPtr_tarea_reglasById(idptr_tarea_regla: number) {
    return lastValueFrom(this.http.get<Ptr_tarea_reglasModel>(`${this.PTR_DataBasEUrl}/${idptr_tarea_regla}`));
  }

  getPtr_tarea_reglas(): Promise<Ptr_tarea_reglasModel[]> {
    return lastValueFrom(this.http.get<Ptr_tarea_reglasModel[]>(`${this.PTR_DataBasEUrl}`));
  }

  postPtr_tarea_reglas(ptr_tarea_reglas: Ptr_tarea_reglasModel) {
    
    return lastValueFrom(this.http.post(`${this.PTR_DataBasEUrl}`, ptr_tarea_reglas));
  }
  putPtr_tarea_reglas(ptr_tarea_reglas: Ptr_tarea_reglasModel, idptr_tarea_regla: number) { 
    return lastValueFrom(this.http.put(`${this.PTR_DataBasEUrl}`, ptr_tarea_reglas));
  }

  deletePtr_tarea_reglas(idptr_tarea_regla: any) {
    return lastValueFrom(this.http.delete(`${this.PTR_DataBasEUrl}/${idptr_tarea_regla}`));
  }
}