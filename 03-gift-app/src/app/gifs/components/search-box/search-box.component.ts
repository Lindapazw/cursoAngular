import { Component } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {
  constructor(){

  }

  searchTag( newTag: String) {
    console.log({ newTag })
  }
}