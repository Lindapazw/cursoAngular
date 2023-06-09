import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { LayoutPageComponents } from './pages/layout-page/layout-page.component';
import { InicioPageComponent } from './pages/inicio-page/inicio-page.component';
import { FooterPageComponent } from './pages/footer-page/footer-page.component';
import { RrhhPageComponent } from './pages/rrhh-page/rrhh-page.component';
import { EntrevistadorPageComponent } from './pages/entrevistador-page/entrevistador-page.component';
import { CoachPageComponent } from './pages/coach-page/coach-page.component';
import { AsignadorPageComponent } from './pages/asignador-page/asignador-page.component';
import { RecursoPageComponent } from './pages/recurso-page/recurso-page.component';
import { DepartamentoPageComponent } from './pages/departamento-page/departamento-page.component';

// material
import { MaterialModule } from '../material/material.module';
import { TipsInicioComponent } from './pages/tips-inicio/tips-inicio.component';
import { NoticiasInicioComponent } from './pages/noticias-inicio/noticias-inicio.component';


@NgModule({
  declarations: [
    MainPageComponent,
    LayoutPageComponents,
    NewPageComponent,
    SearchPageComponent,
    InicioPageComponent,
    FooterPageComponent,
    RrhhPageComponent,
    EntrevistadorPageComponent,
    CoachPageComponent,
    AsignadorPageComponent,
    RecursoPageComponent,
    DepartamentoPageComponent,
    TipsInicioComponent,
    NoticiasInicioComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MaterialModule
  ]
})
export class MainModule { }
