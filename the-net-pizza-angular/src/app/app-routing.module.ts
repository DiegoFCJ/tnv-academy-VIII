import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministrationComponent } from './administration/administration.component';
import { ChiSiamoComponent } from './chi-siamo/chi-siamo.component';
import { ContactsComponent } from './contacts/contacts.component';
import { MenuDetailComponent } from './menu-detail/menu-detail.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  { path: 'menu', component: MenuComponent },
  { path: 'menu/:menuItemId', component: MenuDetailComponent },
  { path: 'administration', component: AdministrationComponent },
  { path: 'administration/:menuItemId', component: AdministrationComponent },
  { path: 'contatti', component: ContactsComponent },
  { path: 'chi-siamo', component: ChiSiamoComponent },
  { path: '', redirectTo: 'menu', pathMatch: 'full' },
  { path: '**', redirectTo: 'menu' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
