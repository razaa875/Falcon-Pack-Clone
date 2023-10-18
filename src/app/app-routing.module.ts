import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeMainComponent } from './home/home-main/home-main.component';
import { SusMainComponent } from './sustainability/sus-main/sus-main.component';

const routes: Routes = [
  {path:'', component:HomeMainComponent},
  {path:'sustainability', component:SusMainComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
