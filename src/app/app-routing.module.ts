import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ptr_accionesDetailComponent } from 'src/app/pages/acciones/acciones-detail/Ptr_acciones-detail.component';
import { Ptr_accionesComponent } from 'src/app/pages/acciones/Ptr_acciones.component';

import { Ptr_dominiosDetailComponent } from 'src/app/pages/dominios/dominios-detail/Ptr_dominios-detail.component';
import { Ptr_dominiosComponent } from 'src/app/pages/dominios/Ptr_dominios.component';

import { Ptr_objetosDetailComponent } from 'src/app/pages/objetos/objetos-detail/Ptr_objetos-detail.component';
import { Ptr_objetosComponent } from 'src/app/pages/objetos/Ptr_objetos.component';

import { Ptr_operadoresDetailComponent } from 'src/app/pages/operadores/operadores-detail/Ptr_operadores-detail.component';
import { Ptr_operadoresComponent } from 'src/app/pages/operadores/Ptr_operadores.component';

import { Ptr_proceso_tareasDetailComponent } from 'src/app/pages/procesos_tareas/procesos_tareas-detail/Ptr_proceso_tareas-detail.component';
import { Ptr_proceso_tareasComponent } from 'src/app/pages/procesos_tareas/Ptr_proceso_tareas.component';

import { Ptr_procesosDetailComponent } from 'src/app/pages/procesos/procesos-detail/Ptr_procesos-detail.component';
import { Ptr_procesosComponent } from 'src/app/pages/procesos/Ptr_procesos.component';

import { Ptr_procesos_detDetailComponent } from 'src/app/pages/procesos_det/procesos_det_detail/Ptr_procesos_det-detail.component';
import { Ptr_procesos_detComponent } from 'src/app/pages/procesos_det/Ptr_procesos_det.component';

import { Ptr_propiedadesDetailComponent } from 'src/app/pages/propiedades/propiedades_detail/Ptr_propiedades-detail.component';
import { Ptr_propiedadesComponent } from 'src/app/pages/propiedades/Ptr_propiedades.component';

import { Ptr_reglasDetailComponent } from 'src/app/pages/reglas/reglas_detail/Ptr_reglas-detail.component';
import { Ptr_reglasComponent } from 'src/app/pages/reglas/Ptr_reglas.component';

import { Ptr_reglas_detDetailComponent } from 'src/app/pages/reglas_det/reglas_det_detail/Ptr_reglas_det-detail.component';
import { Ptr_reglas_detComponent } from 'src/app/pages/reglas_det/Ptr_reglas_det.component';

import { Ptr_sentenciasDetailComponent } from 'src/app/pages/sentencias/sentencias_detail/Ptr_sentencias-detail.component';
import { Ptr_sentenciasComponent } from 'src/app/pages/sentencias/Ptr_sentencias.component';

import { Ptr_tarea_reglasDetailComponent } from 'src/app/pages/tarea_reglas/tarea_reglas_detail/Ptr_tarea_reglas-detail.component';
import { Ptr_tarea_reglasComponent } from 'src/app/pages/tarea_reglas/Ptr_tarea_reglas.component';
import { Ptr_tareasDetailComponent } from 'src/app/pages/tareas/tareas_detail/Ptr_tareas-detail.component';
import { Ptr_tareasComponent } from 'src/app/pages/tareas/Ptr_tareas.component';
import { Ptr_tipo_de_datosDetailComponent } from 'src/app/pages/tipo_datos/tipo_datos_detail/Ptr_tipo_de_datos-detail.component';
import { Ptr_tipo_de_datosComponent } from 'src/app/pages/tipo_datos/Ptr_tipo_de_datos.component';
import { Ptr_tipo_dominiosDetailComponent } from 'src/app/pages/tipo_dominios/tipo_dominios_detail/Ptr_tipo_dominios-detail.component';
import { Ptr_tipo_dominiosComponent } from 'src/app/pages/tipo_dominios/Ptr_tipo_dominios.component';
import { Ptr_tipo_reglasDetailComponent } from 'src/app/pages/tipo_reglas/tipo_reglas_detail/Ptr_tipo_reglas-detail.component';
import { Ptr_tipo_reglasComponent } from 'src/app/pages/tipo_reglas/Ptr_tipo_reglas.component';
import { Ptr_tipo_tareasDetailComponent } from 'src/app/pages/tipo_tareas/tipo_tareas_detail/Ptr_tipo_tareas-detail.component';
import { Ptr_tipo_tareasComponent } from 'src/app/pages/tipo_tareas/Ptr_tipo_tareas.component';
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