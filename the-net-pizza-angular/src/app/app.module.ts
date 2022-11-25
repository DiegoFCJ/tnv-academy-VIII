import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { MenuComponent } from './menu/menu.component';
import { ContactsComponent } from './contacts/contacts.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChiSiamoComponent } from './chi-siamo/chi-siamo.component';
import { MenuItemComponent } from './menu/menu-item/menu-item.component';
import { MenuSectionComponent } from './menu/menu-section/menu-section.component';
import { MenuDetailComponent } from './menu-detail/menu-detail.component';
import { AdministrationComponent } from './administration/administration.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    MenuComponent,
    ContactsComponent,
    FooterComponent,
    ChiSiamoComponent,
    MenuSectionComponent,
    MenuItemComponent,
    MenuDetailComponent,
    AdministrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
