import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// ruteo
import { LayoutPageComponents } from './pages/layout-page/layout-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';

import { CoachPageComponent } from './pages/coach-page/coach-page.component';
import { InicioPageComponent } from './pages/inicio-page/inicio-page.component';
import { RrhhPageComponent } from './pages/rrhh-page/rrhh-page.component';
import { EntrevistadorPageComponent } from './pages/entrevistador-page/entrevistador-page.component';
import { AsignadorPageComponent } from './pages/asignador-page/asignador-page.component';
import { DepartamentoPageComponent } from './pages/departamento-page/departamento-page.component';
import { RecursoPageComponent } from './pages/recurso-page/recurso-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponents,
    children: [ // localhost:4200/main/ ...
      {path: 'new-page', component: NewPageComponent,}, // rutas hijas
      {path: 'search', component: SearchPageComponent,},
      {path: 'edit/:id', component: NewPageComponent,},
      {path: 'list', component: ListPageComponent,},
      {path: 'coach', component: CoachPageComponent,}, // coach
      {path: 'inicio', component: InicioPageComponent,}, // inicio
      {path: 'rrhh', component: RrhhPageComponent,}, // rrhh
      {path: 'entrevistador', component: EntrevistadorPageComponent,}, // entrevistador
      {path: 'asignador', component: AsignadorPageComponent,}, // asignador
      {path: 'recurso', component: RecursoPageComponent,}, // recurso
      {path: 'departamento', component: DepartamentoPageComponent,}, // departamento
      {path: ':id', component: MainPageComponent,},
      {path: '**', redirectTo: 'list'}, // la posicion es importante
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
