import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/models/MenuItem';
import { MenuService } from '../@services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  categories: string[] = [];
  piatti: MenuItem[] = [];

  constructor(public menuService: MenuService) {}

  ngOnInit(): void {
    this.menuService.getAllPiatti().subscribe({
      next: (response) => {
        this.piatti = response;
        this.getCategories();
      },
    });
  }

  getMenuItemsByCategory(category: string) {
    return this.piatti.filter((x) => x.category === category);
  }

  private getCategories() {
    for (let piatto of this.piatti) {
      if (!this.categories.includes(piatto.category)) {
        this.categories.push(piatto.category);
      }
    }
    // Alternativa ES6 usare i Set :)
    // this.categories = [...new Set(this.piattiFromApi.map(x => x.category))];
  }
}
