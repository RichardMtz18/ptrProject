
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from '../environments/environment.prod';
import {Ptr_tipo_reglasModel} from '../models/Ptr_tipo_reglas.model';
@Injectable({
  providedIn: 'root'
})
export class Ptr_tipo_reglasService {

  PTR_DataBasEUrl: string = `${environment.baseUrl}/Ptr_tipo_reglas`;
  constructor(private readonly http: HttpClient) {}

  getPtr_tipo_reglasById(idptr_tipo_regla: number) {
    return lastValueFrom(this.http.get<Ptr_tipo_reglasModel>(`${this.PTR_DataBasEUrl}/${idptr_tipo_regla}`));
  }

  getPtr_tipo_reglas(): Promise<Ptr_tipo_reglasModel[]> {
    return lastValueFrom(this.http.get<Ptr_tipo_reglasModel[]>(`${this.PTR_DataBasEUrl}`));
  }

  postPtr_tipo_reglas(ptr_tipo_reglas: Ptr_tipo_reglasModel) {
    
    return lastValueFrom(this.http.post(`${this.PTR_DataBasEUrl}`, ptr_tipo_reglas));
  }
  putPtr_tipo_reglas(ptr_tipo_reglas: Ptr_tipo_reglasModel, idptr_tipo_regla: number) { 
    return lastValueFrom(this.http.put(`${this.PTR_DataBasEUrl}`, ptr_tipo_reglas));
  }

  deletePtr_tipo_reglas(idptr_tipo_regla: any) {
    return lastValueFrom(this.http.delete(`${this.PTR_DataBasEUrl}/${idptr_tipo_regla}`));
  }
}