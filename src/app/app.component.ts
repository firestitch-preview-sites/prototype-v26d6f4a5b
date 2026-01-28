import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <nav class="top-nav">
      <div class="nav-container">
        <div class="nav-brand">
          <a routerLink="/">PREVIEW HELLO</a>
        </div>
        <ul class="nav-links">
          <li><a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Home</a></li>
          <li><a routerLink="/account" routerLinkActive="active">Account</a></li>
        </ul>
      </div>
    </nav>
    <main>
      <router-outlet></router-outlet>
    </main>
  `,
  styles: [`
    .top-nav {
      background-color: #333;
      padding: 0;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    
    .nav-container {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 2rem;
    }
    
    .nav-brand a {
      color: white;
      text-decoration: none;
      font-size: 1.5rem;
      font-weight: bold;
    }
    
    .nav-links {
      display: flex;
      list-style: none;
      margin: 0;
      padding: 0;
      gap: 2rem;
    }
    
    .nav-links a {
      color: white;
      text-decoration: none;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      transition: background-color 0.3s ease;
    }
    
    .nav-links a:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
    
    .nav-links a.active {
      background-color: #007bff;
    }
    
    main {
      min-height: calc(100vh - 80px);
    }
  `],
})
export class AppComponent {
}