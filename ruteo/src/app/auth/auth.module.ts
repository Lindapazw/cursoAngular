import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { ListComponent } from './pages/list/list.component';
import { HeroPageComponent } from './pages/hero-page/hero-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';



@NgModule({
  declarations: [
    LoginPageComponent,
    RegisterPageComponent,
    ListComponent,
    HeroPageComponent,
    SearchPageComponent
  ],
  imports: [
    AuthRoutingModule
  ]
})
export class AuthModule { }
