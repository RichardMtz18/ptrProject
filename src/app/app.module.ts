import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
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
 import { Ptr_procesos_detComponent } from 'src/app/pages/procesos_det/Ptr_procesos_det.component';
import { Ptr_procesos_detDetailComponent } from 'src/app/pages/procesos_det/procesos_det_detail/Ptr_procesos_det-detail.component';
 import { Ptr_propiedadesComponent } from 'src/app/pages/propiedades/Ptr_propiedades.component';
import { Ptr_propiedadesDetailComponent } from 'src/app/pages/propiedades/propiedades_detail/Ptr_propiedades-detail.component';
 import { Ptr_reglasComponent } from 'src/app/pages/reglas/Ptr_reglas.component';
import { Ptr_reglasDetailComponent } from 'src/app/pages/reglas/reglas_detail/Ptr_reglas-detail.component';
 import { Ptr_reglas_detComponent } from 'src/app/pages/reglas_det/Ptr_reglas_det.component';
import { Ptr_reglas_detDetailComponent } from 'src/app/pages/reglas_det/reglas_det_detail/Ptr_reglas_det-detail.component';
 import { Ptr_sentenciasComponent } from 'src/app/pages/sentencias/Ptr_sentencias.component';
import { Ptr_sentenciasDetailComponent } from 'src/app/pages/sentencias/sentencias_detail/Ptr_sentencias-detail.component';
 import { Ptr_tarea_reglasComponent } from 'src/app/pages/tarea_reglas/Ptr_tarea_reglas.component';
import { Ptr_tarea_reglasDetailComponent } from 'src/app/pages/tarea_reglas/tarea_reglas_detail/Ptr_tarea_reglas-detail.component';
 import { Ptr_tareasComponent } from 'src/app/pages/tareas/Ptr_tareas.component';
import { Ptr_tareasDetailComponent } from 'src/app/pages/tareas/tareas_detail/Ptr_tareas-detail.component';
 import { Ptr_tipo_de_datosComponent } from 'src/app/pages/tipo_datos/Ptr_tipo_de_datos.component';
import { Ptr_tipo_de_datosDetailComponent } from 'src/app/pages/tipo_datos/tipo_datos_detail/Ptr_tipo_de_datos-detail.component';
 import { Ptr_tipo_dominiosComponent } from 'src/app/pages/tipo_dominios/Ptr_tipo_dominios.component';
import { Ptr_tipo_dominiosDetailComponent } from 'src/app/pages/tipo_dominios/tipo_dominios_detail/Ptr_tipo_dominios-detail.component';
 import { Ptr_tipo_reglasComponent } from 'src/app/pages/tipo_reglas/Ptr_tipo_reglas.component';
import { Ptr_tipo_reglasDetailComponent } from 'src/app/pages/tipo_reglas/tipo_reglas_detail/Ptr_tipo_reglas-detail.component';
 import { Ptr_tipo_tareasComponent } from 'src/app/pages/tipo_tareas/Ptr_tipo_tareas.component';
import { Ptr_tipo_tareasDetailComponent } from 'src/app/pages/tipo_tareas/tipo_tareas_detail/Ptr_tipo_tareas-detail.component';
 @NgModule({
  declarations: [
    AppComponent,
Ptr_accionesComponent,
Ptr_accionesDetailComponent,
 Ptr_dominiosComponent,
Ptr_dominiosDetailComponent,
 Ptr_objetosComponent,
Ptr_objetosDetailComponent,
 Ptr_operadoresComponent,
Ptr_operadoresDetailComponent,
 Ptr_proceso_tareasComponent,
Ptr_proceso_tareasDetailComponent,
 Ptr_procesosComponent,
Ptr_procesosDetailComponent,
 Ptr_procesos_detComponent,
Ptr_procesos_detDetailComponent,
 Ptr_propiedadesComponent,
Ptr_propiedadesDetailComponent,
 Ptr_reglasComponent,
Ptr_reglasDetailComponent,
 Ptr_reglas_detComponent,
Ptr_reglas_detDetailComponent,
 Ptr_sentenciasComponent,
Ptr_sentenciasDetailComponent,
 Ptr_tarea_reglasComponent,
Ptr_tarea_reglasDetailComponent,
 Ptr_tareasComponent,
Ptr_tareasDetailComponent,
 Ptr_tipo_de_datosComponent,
Ptr_tipo_de_datosDetailComponent,
 Ptr_tipo_dominiosComponent,
Ptr_tipo_dominiosDetailComponent,
 Ptr_tipo_reglasComponent,
Ptr_tipo_reglasDetailComponent,
 Ptr_tipo_tareasComponent,
Ptr_tipo_tareasDetailComponent,
 ],
imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }