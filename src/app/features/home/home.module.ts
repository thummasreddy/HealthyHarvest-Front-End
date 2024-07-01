import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SliderModule } from '../home_slider/slider_module'; // Import SliderModule

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SliderModule // Add SliderModule to imports
  ]
})
export class HomeModule { }
