import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeHeaderComponent } from './pages/home/home-header/home-header.component';
import { HomeInfoItemsComponent } from './components/home-info-items/home-info-items.component';
import { MenusCoctailsComponent } from './pages/home/menus-coctails/menus-coctails.component';
import { HomeComponent } from './pages/home/home.component';
import { CoctailItemComponent } from './components/coctail-item/coctail-item.component';
import { CoctailListComponent } from './components/coctail-list/coctail-list.component';
import { CoctailDetailComponent } from './components/coctail-detail/coctail-detail.component';
import { DetailsComponent } from './pages/details/details.component';
import { IngredientItemComponent } from './components/ingredient-item/ingredient-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    FooterComponent,
    HomeHeaderComponent,
    HomeInfoItemsComponent,
    MenusCoctailsComponent,
    HomeComponent,
    CoctailItemComponent,
    CoctailListComponent,
    CoctailDetailComponent,
    DetailsComponent,
    IngredientItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
