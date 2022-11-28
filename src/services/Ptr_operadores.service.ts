
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from '../environments/environment.prod';
import {Ptr_operadoresModel} from '../models/Ptr_operadores.model';
@Injectable({
  providedIn: 'root'
})
export class Ptr_operadoresService {

  PTR_DataBasEUrl: string = `${environment.baseUrl}/Ptr_operadores`;
  constructor(private readonly http: HttpClient) {}

  getPtr_operadoresById(idptr_operador: number) {
    return lastValueFrom(this.http.get<Ptr_operadoresModel>(`${this.PTR_DataBasEUrl}/${idptr_operador}`));
  }

  getPtr_operadores(): Promise<Ptr_operadoresModel[]> {
    return lastValueFrom(this.http.get<Ptr_operadoresModel[]>(`${this.PTR_DataBasEUrl}`));
  }

  postPtr_operadores(ptr_operadores: Ptr_operadoresModel) {
    
    return lastValueFrom(this.http.post(`${this.PTR_DataBasEUrl}`, ptr_operadores));
  }
  putPtr_operadores(ptr_operadores: Ptr_operadoresModel, idptr_operador: number) { 
    return lastValueFrom(this.http.put(`${this.PTR_DataBasEUrl}`, ptr_operadores));
  }

  deletePtr_operadores(idptr_operador: any) {
    return lastValueFrom(this.http.delete(`${this.PTR_DataBasEUrl}/${idptr_operador}`));
  }
}