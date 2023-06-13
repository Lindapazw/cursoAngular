import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public heroName: string[] = ['iroman', 'batman', 'hulk', 'spiderman'];
}
