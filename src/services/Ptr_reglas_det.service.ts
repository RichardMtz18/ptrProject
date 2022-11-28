
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from '../environments/environment.prod';
import {Ptr_reglas_detModel} from '../models/Ptr_reglas_det.model';
@Injectable({
  providedIn: 'root'
})
export class Ptr_reglas_detService {

  PTR_DataBasEUrl: string = `${environment.baseUrl}/Ptr_reglas_det`;
  constructor(private readonly http: HttpClient) {}

  getPtr_reglas_detById(idptr_regla_det: number) {
    return lastValueFrom(this.http.get<Ptr_reglas_detModel>(`${this.PTR_DataBasEUrl}/${idptr_regla_det}`));
  }

  getPtr_reglas_det(): Promise<Ptr_reglas_detModel[]> {
    return lastValueFrom(this.http.get<Ptr_reglas_detModel[]>(`${this.PTR_DataBasEUrl}`));
  }

  postPtr_reglas_det(ptr_reglas_det: Ptr_reglas_detModel) {
    
    return lastValueFrom(this.http.post(`${this.PTR_DataBasEUrl}`, ptr_reglas_det));
  }
  putPtr_reglas_det(ptr_reglas_det: Ptr_reglas_detModel, idptr_regla_det: number) { 
    return lastValueFrom(this.http.put(`${this.PTR_DataBasEUrl}`, ptr_reglas_det));
  }

  deletePtr_reglas_det(idptr_regla_det: any) {
    return lastValueFrom(this.http.delete(`${this.PTR_DataBasEUrl}/${idptr_regla_det}`));
  }
}