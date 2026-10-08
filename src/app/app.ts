import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { Contact } from './pages/contact/contact';
import { About } from './pages/about/about';

@Component({
  imports: [Header, Footer, RouterOutlet,],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('class1');
}
