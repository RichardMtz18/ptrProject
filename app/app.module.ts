import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Ptr_accionesComponent } from 'src/crud/Ptr_acciones.component';
import { Ptr_accionesDetailComponent } from 'src/crud/Ptr_acciones-detail.component';
 import { Ptr_dominiosComponent } from 'src/crud/Ptr_dominios.component';
import { Ptr_dominiosDetailComponent } from 'src/crud/Ptr_dominios-detail.component';
 import { Ptr_objetosComponent } from 'src/crud/Ptr_objetos.component';
import { Ptr_objetosDetailComponent } from 'src/crud/Ptr_objetos-detail.component';
 import { Ptr_operadoresComponent } from 'src/crud/Ptr_operadores.component';
import { Ptr_operadoresDetailComponent } from 'src/crud/Ptr_operadores-detail.component';
 import { Ptr_proceso_tareasComponent } from 'src/crud/Ptr_proceso_tareas.component';
import { Ptr_proceso_tareasDetailComponent } from 'src/crud/Ptr_proceso_tareas-detail.component';
 import { Ptr_procesosComponent } from 'src/crud/Ptr_procesos.component';
import { Ptr_procesosDetailComponent } from 'src/crud/Ptr_procesos-detail.component';
 import { Ptr_procesos_detComponent } from 'src/crud/Ptr_procesos_det.component';
import { Ptr_procesos_detDetailComponent } from 'src/crud/Ptr_procesos_det-detail.component';
 import { Ptr_propiedadesComponent } from 'src/crud/Ptr_propiedades.component';
import { Ptr_propiedadesDetailComponent } from 'src/crud/Ptr_propiedades-detail.component';
 import { Ptr_reglasComponent } from 'src/crud/Ptr_reglas.component';
import { Ptr_reglasDetailComponent } from 'src/crud/Ptr_reglas-detail.component';
 import { Ptr_reglas_detComponent } from 'src/crud/Ptr_reglas_det.component';
import { Ptr_reglas_detDetailComponent } from 'src/crud/Ptr_reglas_det-detail.component';
 import { Ptr_sentenciasComponent } from 'src/crud/Ptr_sentencias.component';
import { Ptr_sentenciasDetailComponent } from 'src/crud/Ptr_sentencias-detail.component';
 import { Ptr_tarea_reglasComponent } from 'src/crud/Ptr_tarea_reglas.component';
import { Ptr_tarea_reglasDetailComponent } from 'src/crud/Ptr_tarea_reglas-detail.component';
 import { Ptr_tareasComponent } from 'src/crud/Ptr_tareas.component';
import { Ptr_tareasDetailComponent } from 'src/crud/Ptr_tareas-detail.component';
 import { Ptr_tipo_de_datosComponent } from 'src/crud/Ptr_tipo_de_datos.component';
import { Ptr_tipo_de_datosDetailComponent } from 'src/crud/Ptr_tipo_de_datos-detail.component';
 import { Ptr_tipo_dominiosComponent } from 'src/crud/Ptr_tipo_dominios.component';
import { Ptr_tipo_dominiosDetailComponent } from 'src/crud/Ptr_tipo_dominios-detail.component';
 import { Ptr_tipo_reglasComponent } from 'src/crud/Ptr_tipo_reglas.component';
import { Ptr_tipo_reglasDetailComponent } from 'src/crud/Ptr_tipo_reglas-detail.component';
 import { Ptr_tipo_tareasComponent } from 'src/crud/Ptr_tipo_tareas.component';
import { Ptr_tipo_tareasDetailComponent } from 'src/crud/Ptr_tipo_tareas-detail.component';
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