import { Component, OnInit } from '@angular/core';
import { appDescription, appTitle } from 'src/models/labels';
import { MenuService } from '../@services/menu.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  title = appTitle;
  subtitle = appDescription;

  constructor() { 
  }

  ngOnInit(): void {
  }

}
