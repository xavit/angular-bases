import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter {{ counter }}</h3>

    <button (click)="increasedBy(+1)">+1</button>
    <button (click)="reset()">Reset</button>
    <button (click)="increasedBy(-1)">-1</button>
  `,
})
export class CounterComponent {
  public counter: number = 0;

  public increasedBy(value: number = 0): void {
    this.counter += value;
  }

  public reset(): void {
    this.counter = 0;
  }
}
