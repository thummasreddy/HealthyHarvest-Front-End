import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';  // Ensure BrowserModule is imported for web apps
import { HttpClientModule } from '@angular/common/http';  // Ensure HttpClientModule is imported
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { CarouselModule } from 'ngx-bootstrap/carousel'; // Correctly import CarouselModule

import { AppComponent } from './app.component'; // Ensure AppComponent is imported

@NgModule({
  declarations: [
    AppComponent // Declare AppComponent
  ],
  imports: [
    BrowserModule, // BrowserModule should be imported for web apps
    HttpClientModule, // Import HttpClientModule
    AppRoutingModule,
    CoreModule,
    SharedModule,
    CarouselModule.forRoot() // Import CarouselModule and call forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent] // Ensure AppComponent is bootstrapped
})
export class AppModule { }
