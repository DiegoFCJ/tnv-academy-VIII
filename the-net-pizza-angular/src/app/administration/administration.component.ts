import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItem } from 'src/models/MenuItem';
import { MenuService } from '../@services/menu.service';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.scss']
})
export class AdministrationComponent implements OnInit {

  menuItem: Partial<MenuItem> = {};
  isEditMode = false;
  menuItemId: number;

  constructor(
    private menuService: MenuService,
    private router: Router,
    activatedRoute: ActivatedRoute
  ) {
    this.menuItemId = activatedRoute.snapshot.params['menuItemId'];
    this.isEditMode = !!this.menuItemId;
  }

  ngOnInit(): void {
    if (this.isEditMode) {
      this.menuService.getPiatto(this.menuItemId).subscribe({
        next: (res) => (this.menuItem = res),
      });
    }
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    form.control.markAllAsTouched();

    if (form.valid) { 
      if (this.isEditMode) {
        this.menuService.editPiatto(this.menuItemId, form.value).subscribe({
          next: () => {
            this.router.navigateByUrl('/');
          }
        });
      } else {
        this.menuService.addPiatto(form.value).subscribe({
          next: () => {
            this.router.navigateByUrl('/');
          }
        });
      }
    }
  }
}
