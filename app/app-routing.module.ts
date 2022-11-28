import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ptr_accionesDetailComponent } from 'src/crud/Ptr_acciones-detail.component';
import { Ptr_accionesComponent } from 'src/crud/Ptr_acciones.component';
import { Ptr_dominiosDetailComponent } from 'src/crud/Ptr_dominios-detail.component';
import { Ptr_dominiosComponent } from 'src/crud/Ptr_dominios.component';
import { Ptr_objetosDetailComponent } from 'src/crud/Ptr_objetos-detail.component';
import { Ptr_objetosComponent } from 'src/crud/Ptr_objetos.component';
import { Ptr_operadoresDetailComponent } from 'src/crud/Ptr_operadores-detail.component';
import { Ptr_operadoresComponent } from 'src/crud/Ptr_operadores.component';
import { Ptr_proceso_tareasDetailComponent } from 'src/crud/Ptr_proceso_tareas-detail.component';
import { Ptr_proceso_tareasComponent } from 'src/crud/Ptr_proceso_tareas.component';
import { Ptr_procesosDetailComponent } from 'src/crud/Ptr_procesos-detail.component';
import { Ptr_procesosComponent } from 'src/crud/Ptr_procesos.component';
import { Ptr_procesos_detDetailComponent } from 'src/crud/Ptr_procesos_det-detail.component';
import { Ptr_procesos_detComponent } from 'src/crud/Ptr_procesos_det.component';
import { Ptr_propiedadesDetailComponent } from 'src/crud/Ptr_propiedades-detail.component';
import { Ptr_propiedadesComponent } from 'src/crud/Ptr_propiedades.component';
import { Ptr_reglasDetailComponent } from 'src/crud/Ptr_reglas-detail.component';
import { Ptr_reglasComponent } from 'src/crud/Ptr_reglas.component';
import { Ptr_reglas_detDetailComponent } from 'src/crud/Ptr_reglas_det-detail.component';
import { Ptr_reglas_detComponent } from 'src/crud/Ptr_reglas_det.component';
import { Ptr_sentenciasDetailComponent } from 'src/crud/Ptr_sentencias-detail.component';
import { Ptr_sentenciasComponent } from 'src/crud/Ptr_sentencias.component';
import { Ptr_tarea_reglasDetailComponent } from 'src/crud/Ptr_tarea_reglas-detail.component';
import { Ptr_tarea_reglasComponent } from 'src/crud/Ptr_tarea_reglas.component';
import { Ptr_tareasDetailComponent } from 'src/crud/Ptr_tareas-detail.component';
import { Ptr_tareasComponent } from 'src/crud/Ptr_tareas.component';
import { Ptr_tipo_de_datosDetailComponent } from 'src/crud/Ptr_tipo_de_datos-detail.component';
import { Ptr_tipo_de_datosComponent } from 'src/crud/Ptr_tipo_de_datos.component';
import { Ptr_tipo_dominiosDetailComponent } from 'src/crud/Ptr_tipo_dominios-detail.component';
import { Ptr_tipo_dominiosComponent } from 'src/crud/Ptr_tipo_dominios.component';
import { Ptr_tipo_reglasDetailComponent } from 'src/crud/Ptr_tipo_reglas-detail.component';
import { Ptr_tipo_reglasComponent } from 'src/crud/Ptr_tipo_reglas.component';
import { Ptr_tipo_tareasDetailComponent } from 'src/crud/Ptr_tipo_tareas-detail.component';
import { Ptr_tipo_tareasComponent } from 'src/crud/Ptr_tipo_tareas.component';
const routes: Routes = [
{path: 'Ptr_acciones', component:Ptr_accionesComponent}, 
{path: 'Ptr_dominios', component:Ptr_dominiosComponent}, 
{path: 'Ptr_objetos', component:Ptr_objetosComponent}, 
{path: 'Ptr_operadores', component:Ptr_operadoresComponent}, 
{path: 'Ptr_proceso_tareas', component:Ptr_proceso_tareasComponent}, 
{path: 'Ptr_procesos', component:Ptr_procesosComponent}, 
{path: 'Ptr_procesos_det', component:Ptr_procesos_detComponent}, 
{path: 'Ptr_propiedades', component:Ptr_propiedadesComponent}, 
{path: 'Ptr_reglas', component:Ptr_reglasComponent}, 
{path: 'Ptr_reglas_det', component:Ptr_reglas_detComponent}, 
{path: 'Ptr_sentencias', component:Ptr_sentenciasComponent}, 
{path: 'Ptr_tarea_reglas', component:Ptr_tarea_reglasComponent}, 
{path: 'Ptr_tareas', component:Ptr_tareasComponent}, 
{path: 'Ptr_tipo_de_datos', component:Ptr_tipo_de_datosComponent}, 
{path: 'Ptr_tipo_dominios', component:Ptr_tipo_dominiosComponent}, 
{path: 'Ptr_tipo_reglas', component:Ptr_tipo_reglasComponent}, 
{path: 'Ptr_tipo_tareas', component:Ptr_tipo_tareasComponent}, 
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }