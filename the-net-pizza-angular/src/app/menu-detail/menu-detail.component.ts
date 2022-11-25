import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuItem } from 'src/models/MenuItem';
import { MenuService } from '../@services/menu.service';

@Component({
  selector: 'app-menu-detail',
  templateUrl: './menu-detail.component.html',
  styleUrls: ['./menu-detail.component.scss']
})
export class MenuDetailComponent implements OnInit {

  menuItemId: number;
  menuItem: Partial<MenuItem> = {};
  error = false;

  constructor(private activatedRoute: ActivatedRoute, private menuService: MenuService) { 
    this.menuItemId = +this.activatedRoute.snapshot.params['menuItemId'];
  }

  ngOnInit(): void {
    this.menuService.getPiatto(this.menuItemId).subscribe({
      next: (response) => this.menuItem = response,
      error: (error) => this.error = true,
    })
  }

}
