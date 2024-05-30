import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePage } from './pages/home/home.page';
import { AboutPage } from './pages/about/about.page';
import { LoginPage } from './pages/login/login.page';
import { AdministrationPage } from './pages/administration/administration.page';
import { ContactPage } from './pages/contact/contact.page';
import { RegisterPage } from './pages/register/register.page';
import { UserAdministrationPage } from './pages/user-administration/user-administration.page';

const routes: Routes = [
  { path: 'home', component: HomePage },
  { path: 'contact', component: ContactPage },
  { path: '', component: LoginPage },
  { path: 'administration', component: AdministrationPage },
  { path: 'about', component: AboutPage },
  { path: 'login', component: LoginPage },
  { path: 'users',component:UserAdministrationPage},
  { path: 'register', component: RegisterPage },
  { path: '**', redirectTo: '/login', pathMatch: "full" } // Redireccionar a la página de inicio si la ruta no existe
];

export { routes }