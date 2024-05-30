import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, NgIf, NgClass],
  templateUrl: './nav-bar.page.html',
  styleUrl: './nav-bar.page.css'
})
export class NavBarPage {


  public get isAuthenticated(): boolean {
    const token = localStorage.getItem("auth_token");
    return !!token; // Devuelve true si token existe, false en caso contrario
  }

  public get isAdmin(): boolean {
    const rol = localStorage.getItem("rol");
    const token = localStorage.getItem("auth_token");
    if (rol == "admin" && token) {//se pregunta si es administrador

      return true;

    } else {

      return false;
    }

  }

  public logOut(): void {

    localStorage.clear();
    window.location.reload();

  }


}
