import { Component } from '@angular/core';
// RouterLinkActive ko yahan add karein 👇
import { RouterLink, RouterLinkActive } from '@angular/router'; 

@Component({
  selector: 'app-header',
  standalone: true, // Agar aap standalone component use kar rahe hain
  // imports mein RouterLinkActive ko add karein 👇
  imports: [RouterLink, RouterLinkActive], 
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class HeaderComponent {}
