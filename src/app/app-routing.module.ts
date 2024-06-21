import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule) },
      { path: 'products', loadChildren: () => import('../app/features/products/products.module').then(m => m.ProductsModule) },
      { path: 'about', loadChildren: () => import('../app/features/about/about.module').then(m => m.AboutModule) },
      { path: 'contact', loadChildren: () => import('../app/features/contact/contact.module').then(m => m.ContactModule) },
      { path: 'news', loadChildren: () => import('../app/features/news/news.module').then(m => m.NewsModule) },
      { path: 'careers', loadChildren: () => import('../app/features/careers/careers.module').then(m => m.CareersModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
