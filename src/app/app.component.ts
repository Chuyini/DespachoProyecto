import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarPage } from './componentes/nav-bar/nav-bar.page';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavBarPage],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ProyectoWeb-Escalables';
}
