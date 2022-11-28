
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from '../environments/environment.prod';
import {Ptr_reglasModel} from '../models/Ptr_reglas.model';
@Injectable({
  providedIn: 'root'
})
export class Ptr_reglasService {

  PTR_DataBasEUrl: string = `${environment.baseUrl}/Ptr_reglas`;
  constructor(private readonly http: HttpClient) {}

  getPtr_reglasById(idptr_regla: number) {
    return lastValueFrom(this.http.get<Ptr_reglasModel>(`${this.PTR_DataBasEUrl}/${idptr_regla}`));
  }

  getPtr_reglas(): Promise<Ptr_reglasModel[]> {
    return lastValueFrom(this.http.get<Ptr_reglasModel[]>(`${this.PTR_DataBasEUrl}`));
  }

  postPtr_reglas(ptr_reglas: Ptr_reglasModel) {
    
    return lastValueFrom(this.http.post(`${this.PTR_DataBasEUrl}`, ptr_reglas));
  }
  putPtr_reglas(ptr_reglas: Ptr_reglasModel, idptr_regla: number) { 
    return lastValueFrom(this.http.put(`${this.PTR_DataBasEUrl}`, ptr_reglas));
  }

  deletePtr_reglas(idptr_regla: any) {
    return lastValueFrom(this.http.delete(`${this.PTR_DataBasEUrl}/${idptr_regla}`));
  }
}