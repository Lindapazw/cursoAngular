import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public heroName: string[] = ['iroman', 'batman', 'hulk', 'spiderman'];
  public deleteHero?: string;

  removeLastHero(): void {
    // const deleteHero = this.heroName.pop();
    this.deleteHero = this.heroName.pop();
  }
}
