
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from '../environments/environment.prod';
import {Ptr_objetosModel} from '../models/Ptr_objetos.model';
@Injectable({
  providedIn: 'root'
})
export class Ptr_objetosService {

  PTR_DataBasEUrl: string = `${environment.baseUrl}/Ptr_objetos`;
  constructor(private readonly http: HttpClient) {}

  getPtr_objetosById(idptr_objeto: number) {
    return lastValueFrom(this.http.get<Ptr_objetosModel>(`${this.PTR_DataBasEUrl}/${idptr_objeto}`));
  }

  getPtr_objetos(): Promise<Ptr_objetosModel[]> {
    return lastValueFrom(this.http.get<Ptr_objetosModel[]>(`${this.PTR_DataBasEUrl}`));
  }

  postPtr_objetos(ptr_objetos: Ptr_objetosModel) {
    
    return lastValueFrom(this.http.post(`${this.PTR_DataBasEUrl}`, ptr_objetos));
  }
  putPtr_objetos(ptr_objetos: Ptr_objetosModel, idptr_objeto: number) { 
    return lastValueFrom(this.http.put(`${this.PTR_DataBasEUrl}`, ptr_objetos));
  }

  deletePtr_objetos(idptr_objeto: any) {
    return lastValueFrom(this.http.delete(`${this.PTR_DataBasEUrl}/${idptr_objeto}`));
  }
}