import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './home/home';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Services } from './services/services';

@Component({
  imports: [Navbar,Footer,Home,About,Contact,Services,RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('class1');
}
