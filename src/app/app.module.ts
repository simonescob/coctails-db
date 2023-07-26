import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeHeaderComponent } from './pages/home/home-header/home-header.component';
import { HomeInfoItemsComponent } from './components/home-info-items/home-info-items.component';
import { MenusCoctailsComponent } from './pages/home/menus-coctails/menus-coctails.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    FooterComponent,
    HomeHeaderComponent,
    HomeInfoItemsComponent,
    MenusCoctailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
