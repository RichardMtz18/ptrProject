
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from '../environments/environment.prod';
import {Ptr_dominiosModel} from '../models/Ptr_dominios.model';
@Injectable({
  providedIn: 'root'
})
export class Ptr_dominiosService {

  PTR_DataBasEUrl: string = `${environment.baseUrl}/Ptr_dominios`;
  constructor(private readonly http: HttpClient) {}

  getPtr_dominiosById(idptr_dominio: number) {
    return lastValueFrom(this.http.get<Ptr_dominiosModel>(`${this.PTR_DataBasEUrl}/${idptr_dominio}`));
  }

  getPtr_dominios(): Promise<Ptr_dominiosModel[]> {
    return lastValueFrom(this.http.get<Ptr_dominiosModel[]>(`${this.PTR_DataBasEUrl}`));
  }

  postPtr_dominios(ptr_dominios: Ptr_dominiosModel) {
    
    return lastValueFrom(this.http.post(`${this.PTR_DataBasEUrl}`, ptr_dominios));
  }
  putPtr_dominios(ptr_dominios: Ptr_dominiosModel, idptr_dominio: number) { 
    return lastValueFrom(this.http.put(`${this.PTR_DataBasEUrl}`, ptr_dominios));
  }

  deletePtr_dominios(idptr_dominio: any) {
    return lastValueFrom(this.http.delete(`${this.PTR_DataBasEUrl}/${idptr_dominio}`));
  }
}