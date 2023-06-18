import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// ruteo
import { LayoutPageComponents } from './pages/layout-page/layout-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponents,
    children: [ // localhost:4200/main/ ...
      {path: 'new-page', component: NewPageComponent,}, // rutas hijas
      {path: 'search', component: SearchPageComponent,},
      {path: 'edit/:id', component: NewPageComponent,},
      {path: 'list', component: ListPageComponent,},
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
