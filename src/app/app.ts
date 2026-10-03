import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { Home } from './home/home';
import { Contact } from './pages/contact/contact';
import { About } from './pages/about/about';

@Component({
  imports: [Header,Home,Footer,Contact,About],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('class1');
}
