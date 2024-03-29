/**
 * File name: app-routing.module.ts
 * File description: Defines the routes used in the Angular application.
 * Author(s): Brock Hemsouvanh & Professor Richard Krasso https://www.youtube.com/watch?v=WDC2FvDTi_4
 * Date created: 2024-03-27
 */


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  { path: 'contact',
  component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
