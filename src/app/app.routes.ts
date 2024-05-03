import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePage } from './pages/home/home.page';
import { AboutPage } from './pages/about/about.page';

const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'about', component: AboutPage },
  { path: '**', redirectTo: '/' } // Redireccionar a la página de inicio si la ruta no existe
];

export{routes}