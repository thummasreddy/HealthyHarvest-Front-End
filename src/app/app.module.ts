import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

// Do not import standalone components here

@NgModule({
  declarations: [
    // No declarations for standalone components
  ],
  imports: [
    HttpClientModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
  ],
  providers: [],
})
export class AppModule { }
