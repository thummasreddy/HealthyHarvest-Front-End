import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from '../home_slider/slider_component';

@NgModule({
  declarations: [
    SliderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SliderComponent
  ]
})
export class SliderModule { }
