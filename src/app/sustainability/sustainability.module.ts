import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SusMainComponent } from './sus-main/sus-main.component';
import { SusDescComponent } from './sus-desc/sus-desc.component';
import { SusCardComponent } from './sus-card/sus-card.component';



@NgModule({
  declarations: [
    SusMainComponent,
    SusDescComponent,
    SusCardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SustainabilityModule { }
