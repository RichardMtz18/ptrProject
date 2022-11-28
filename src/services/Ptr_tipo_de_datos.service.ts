
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from '../environments/environment.prod';
import {Ptr_tipo_de_datosModel} from '../models/Ptr_tipo_de_datos.model';
@Injectable({
  providedIn: 'root'
})
export class Ptr_tipo_de_datosService {

  PTR_DataBasEUrl: string = `${environment.baseUrl}/Ptr_tipo_de_datos`;
  constructor(private readonly http: HttpClient) {}

  getPtr_tipo_de_datosById(idptr_tipo_de_dato: number) {
    return lastValueFrom(this.http.get<Ptr_tipo_de_datosModel>(`${this.PTR_DataBasEUrl}/${idptr_tipo_de_dato}`));
  }

  getPtr_tipo_de_datos(): Promise<Ptr_tipo_de_datosModel[]> {
    return lastValueFrom(this.http.get<Ptr_tipo_de_datosModel[]>(`${this.PTR_DataBasEUrl}`));
  }

  postPtr_tipo_de_datos(ptr_tipo_de_datos: Ptr_tipo_de_datosModel) {
    
    return lastValueFrom(this.http.post(`${this.PTR_DataBasEUrl}`, ptr_tipo_de_datos));
  }
  putPtr_tipo_de_datos(ptr_tipo_de_datos: Ptr_tipo_de_datosModel, idptr_tipo_de_dato: number) { 
    return lastValueFrom(this.http.put(`${this.PTR_DataBasEUrl}`, ptr_tipo_de_datos));
  }

  deletePtr_tipo_de_datos(idptr_tipo_de_dato: any) {
    return lastValueFrom(this.http.delete(`${this.PTR_DataBasEUrl}/${idptr_tipo_de_dato}`));
  }
}