import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { CardComponent } from './components/card/card.component';



@NgModule({
  declarations: [
    HomeComponent,
    SearchBoxComponent,
    CardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent],
})
export class GifsModule { }
