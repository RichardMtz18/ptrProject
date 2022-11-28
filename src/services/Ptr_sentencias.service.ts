
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from '../environments/environment.prod';
import {Ptr_sentenciasModel} from '../models/Ptr_sentencias.model';
@Injectable({
  providedIn: 'root'
})
export class Ptr_sentenciasService {

  PTR_DataBasEUrl: string = `${environment.baseUrl}/Ptr_sentencias`;
  constructor(private readonly http: HttpClient) {}

  getPtr_sentenciasById(idptr_tipo_sentencia: number) {
    return lastValueFrom(this.http.get<Ptr_sentenciasModel>(`${this.PTR_DataBasEUrl}/${idptr_tipo_sentencia}`));
  }

  getPtr_sentencias(): Promise<Ptr_sentenciasModel[]> {
    return lastValueFrom(this.http.get<Ptr_sentenciasModel[]>(`${this.PTR_DataBasEUrl}`));
  }

  postPtr_sentencias(ptr_sentencias: Ptr_sentenciasModel) {
    
    return lastValueFrom(this.http.post(`${this.PTR_DataBasEUrl}`, ptr_sentencias));
  }
  putPtr_sentencias(ptr_sentencias: Ptr_sentenciasModel, idptr_tipo_sentencia: number) { 
    return lastValueFrom(this.http.put(`${this.PTR_DataBasEUrl}`, ptr_sentencias));
  }

  deletePtr_sentencias(idptr_tipo_sentencia: any) {
    return lastValueFrom(this.http.delete(`${this.PTR_DataBasEUrl}/${idptr_tipo_sentencia}`));
  }
}