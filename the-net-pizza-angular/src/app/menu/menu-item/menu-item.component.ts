import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from 'src/models/MenuItem';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {

  @Input() menuItem: Partial<MenuItem> = {};

  constructor() { }

  ngOnInit(): void {
    
  }

}
