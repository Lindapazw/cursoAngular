import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter: {{counter}}</h3>

    <button (click)="increaseBy(+1)">+1</button>
    <button (click)="increaseBy(-1)">-1</button>
    <button (click)="reset()">Reset</button>
  `
})

export class CounterComponent  {
  public counter: number = 10;

  increaseBy( value: number ):void {
    this.counter += value;
  }

  // opcional
  decreaseBy(value: number ):void {
    this.counter -= value;
  }

  // opcional
  reset() {
    this.counter = 10;
  }
}
