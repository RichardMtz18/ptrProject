
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from '../environments/environment.prod';
import {Ptr_tipo_dominiosModel} from '../models/Ptr_tipo_dominios.model';
@Injectable({
  providedIn: 'root'
})
export class Ptr_tipo_dominiosService {

  PTR_DataBasEUrl: string = `${environment.baseUrl}/Ptr_tipo_dominios`;
  constructor(private readonly http: HttpClient) {}

  getPtr_tipo_dominiosById(idptr_tipo_dominio: number) {
    return lastValueFrom(this.http.get<Ptr_tipo_dominiosModel>(`${this.PTR_DataBasEUrl}/${idptr_tipo_dominio}`));
  }

  getPtr_tipo_dominios(): Promise<Ptr_tipo_dominiosModel[]> {
    return lastValueFrom(this.http.get<Ptr_tipo_dominiosModel[]>(`${this.PTR_DataBasEUrl}`));
  }

  postPtr_tipo_dominios(ptr_tipo_dominios: Ptr_tipo_dominiosModel) {
    
    return lastValueFrom(this.http.post(`${this.PTR_DataBasEUrl}`, ptr_tipo_dominios));
  }
  putPtr_tipo_dominios(ptr_tipo_dominios: Ptr_tipo_dominiosModel, idptr_tipo_dominio: number) { 
    return lastValueFrom(this.http.put(`${this.PTR_DataBasEUrl}`, ptr_tipo_dominios));
  }

  deletePtr_tipo_dominios(idptr_tipo_dominio: any) {
    return lastValueFrom(this.http.delete(`${this.PTR_DataBasEUrl}/${idptr_tipo_dominio}`));
  }
}