import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  public heroes = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Captain America'];
  public delHeroe?: string = '';

  removeHero(): void {
    this.delHeroe = this.heroes.pop();
  }
}
