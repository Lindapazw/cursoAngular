import { Component } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent {
  public character: Character = {
    name:'',
    power: 0
  };

  emitCharacter():void {
    console.log(this.character);

    this.character.name = '';
    this.character.power = 0;
  }
}
