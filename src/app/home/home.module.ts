import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeMainComponent } from './home-main/home-main.component';
import { HomeHeroComponent } from './home-hero/home-hero.component';
import { HomeAboutComponent } from './home-about/home-about.component';
import { HomeSusComponent } from './home-sus/home-sus.component';
import { HomeVerticalsComponent } from './home-verticals/home-verticals.component';
import { HomeCategoriesComponent } from './home-categories/home-categories.component';
import { HomeNewseventsComponent } from './home-newsevents/home-newsevents.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HomeCorporateComponent } from './home-corporate/home-corporate.component';
import { HomePackagingComponent } from './home-packaging/home-packaging.component';
import { HomeServeComponent } from './home-serve/home-serve.component';
import { HomeClientsComponent } from './home-clients/home-clients.component';
import { HomeLinkedinfeedComponent } from './home-linkedinfeed/home-linkedinfeed.component';
import { HomeGlobalComponent } from './home-global/home-global.component';


@NgModule({
  declarations: [
    HomeMainComponent,
    HomeHeroComponent,
    HomeAboutComponent,
    HomeSusComponent,
    HomeVerticalsComponent,
    HomeCategoriesComponent,
    HomeNewseventsComponent,
    HomeCorporateComponent,
    HomePackagingComponent,
    HomeServeComponent,
    HomeClientsComponent,
    HomeLinkedinfeedComponent,
    HomeGlobalComponent,
  ],
  imports: [
    CommonModule,
    CarouselModule

  ]
})
export class HomeModule { }
