import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeHeaderComponent } from './pages/home/home-header/home-header.component';

const routes: Routes = [
  { path: '', component: HomeHeaderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
