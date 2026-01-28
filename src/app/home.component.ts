import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <div class="home-page">
      <h1>Preview Site</h1>
      <p>Welcome to the home page!</p>
    </div>
  `,
  styles: [`
    .home-page {
      padding: 20px;
    }
    
    h1 {
      color: #333;
      font-size: 2rem;
      margin-bottom: 1rem;
    }
    
    p {
      font-size: 1.1rem;
      color: #666;
    }
  `],
})
export class HomeComponent {
}