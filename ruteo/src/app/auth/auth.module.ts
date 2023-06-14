import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';



@NgModule({
  declarations: [
    LayoutPageComponent
  ],
  imports: [
    CommentsModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
