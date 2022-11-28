
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from '../environments/environment.prod';
import {Ptr_propiedadesModel} from '../models/Ptr_propiedades.model';
@Injectable({
  providedIn: 'root'
})
export class Ptr_propiedadesService {

  PTR_DataBasEUrl: string = `${environment.baseUrl}/Ptr_propiedades`;
  constructor(private readonly http: HttpClient) {}

  getPtr_propiedadesById(idptr_propiedad: number) {
    return lastValueFrom(this.http.get<Ptr_propiedadesModel>(`${this.PTR_DataBasEUrl}/${idptr_propiedad}`));
  }

  getPtr_propiedades(): Promise<Ptr_propiedadesModel[]> {
    return lastValueFrom(this.http.get<Ptr_propiedadesModel[]>(`${this.PTR_DataBasEUrl}`));
  }

  postPtr_propiedades(ptr_propiedades: Ptr_propiedadesModel) {
    
    return lastValueFrom(this.http.post(`${this.PTR_DataBasEUrl}`, ptr_propiedades));
  }
  putPtr_propiedades(ptr_propiedades: Ptr_propiedadesModel, idptr_propiedad: number) { 
    return lastValueFrom(this.http.put(`${this.PTR_DataBasEUrl}`, ptr_propiedades));
  }

  deletePtr_propiedades(idptr_propiedad: any) {
    return lastValueFrom(this.http.delete(`${this.PTR_DataBasEUrl}/${idptr_propiedad}`));
  }
}