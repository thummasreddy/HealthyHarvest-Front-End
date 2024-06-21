import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CareersComponent } from './careers.component';
import { CareersRoutingModule } from '../careers/careers-routing.module';

@NgModule({
  declarations: [CareersComponent],
  imports: [
    CommonModule,
    CareersRoutingModule
  ]
})
export class CareersModule { }
