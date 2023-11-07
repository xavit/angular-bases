import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
  public name: string = 'Ironman';

  public age: number = 45;

  public get capitalizedName(): string {
    return this.name.toUpperCase();
  }
}
