import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {
  public character: Character[] =[{
    name: 'Linda',
    power: 1,
  },{
    name: 'Gonza',
    power: 1,
  },{
    name: 'Alguien',
    power: 1,
  },{
    name: 'Abuela',
    power: 2,
  }];

  onNewCharacter(character: Character):void{

    this.character.push(character);
  }

}
