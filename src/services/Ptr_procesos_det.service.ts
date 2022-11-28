
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from '../environments/environment.prod';
import {Ptr_procesos_detModel} from '../models/Ptr_procesos_det.model';
@Injectable({
  providedIn: 'root'
})
export class Ptr_procesos_detService {

  PTR_DataBasEUrl: string = `${environment.baseUrl}/Ptr_procesos_det`;
  constructor(private readonly http: HttpClient) {}

  getPtr_procesos_detById(id: number) {
    return lastValueFrom(this.http.get<Ptr_procesos_detModel>(`${this.PTR_DataBasEUrl}/${id}`));
  }

  getPtr_procesos_det(): Promise<Ptr_procesos_detModel[]> {
    return lastValueFrom(this.http.get<Ptr_procesos_detModel[]>(`${this.PTR_DataBasEUrl}`));
  }

  postPtr_procesos_det(ptr_procesos_det: Ptr_procesos_detModel) {
    
    return lastValueFrom(this.http.post(`${this.PTR_DataBasEUrl}`, ptr_procesos_det));
  }
  putPtr_procesos_det(ptr_procesos_det: Ptr_procesos_detModel, id: number) { 
    return lastValueFrom(this.http.put(`${this.PTR_DataBasEUrl}`, ptr_procesos_det));
  }

  deletePtr_procesos_det(id: any) {
    return lastValueFrom(this.http.delete(`${this.PTR_DataBasEUrl}/${id}`));
  }
}