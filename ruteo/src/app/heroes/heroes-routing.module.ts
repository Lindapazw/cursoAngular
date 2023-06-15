import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from '../auth/pages/layout-page/layout-page.component';
import { HeroPageComponent} from '../auth/pages/hero-page/hero-page.component';
import { SearchPageComponent } from '../auth/pages/search-page/search-page.component';
import { ListComponent } from '../auth/pages/list/list.component';
import { NewPageComponent } from '../auth/pages/new-page/new-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      {path: 'new-hero',component: NewPageComponent},
      {path: 'search',component: SearchPageComponent},
      {path: 'edit/:id',component: NewPageComponent},
      {path: 'list',component: ListComponent},
      {path: ':id',component: HeroPageComponent},
      {path: '**', redirectTo: 'list'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
