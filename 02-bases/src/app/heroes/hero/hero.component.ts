import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string = 'Iroman';
  public age: number = 45;

  get capitalizedName():string {
    return this.name.toUpperCase();
  }

  get HeroDescription():string {
    return `${ this.name } - ${ this.age }`;

  }

  changeHero():void {
    this.name = 'Batman';
  }

  changeAge():void {
    this.age = 20;
  }

  reset():void {
    this.name = 'Iroman';
    this.age = 45;
  }
}
