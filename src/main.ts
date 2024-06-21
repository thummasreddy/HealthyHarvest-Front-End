import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app/app-routing.module';
import { CoreModule } from './app/core/core.module';
import { SharedModule } from './app/shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';

// Import standalone components
import { HeaderComponent } from './app/layouts/header/header.component';
import { FooterComponent } from './app/layouts/footer/footer.component';
import { MainLayoutComponent } from './app/layouts/main-layout/main-layout.component';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule),
    importProvidersFrom(HttpClientModule),
    importProvidersFrom(AppRoutingModule),
    importProvidersFrom(CoreModule),
    importProvidersFrom(SharedModule),
    // Import standalone components here
    HeaderComponent,
    FooterComponent,
    MainLayoutComponent
  ]
}).catch(err => console.error(err));
