import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from 'src/models/MenuItem';

@Component({
  selector: 'app-menu-section',
  templateUrl: './menu-section.component.html',
  styleUrls: ['./menu-section.component.scss']
})
export class MenuSectionComponent implements OnInit {

  @Input() title: string = '';
  @Input() menuItems: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {

  }

}
