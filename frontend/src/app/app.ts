import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBar } from './components/NavBar/nav-bar';
import { PaisesSelect } from './components/PaisesSelect/paises.select';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBar, PaisesSelect],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Victor');
}
