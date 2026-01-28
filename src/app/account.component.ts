import { Component } from '@angular/core';

@Component({
  selector: 'app-account',
  standalone: true,
  template: `
    <div class="account-page">
      <div class="page-header">
        <h1 class="page-title">My Account</h1>
        <p class="page-subtitle">Manage your account settings and preferences</p>
      </div>
      
      <div class="account-content">
        <div class="account-section">
          <h2>Profile Information</h2>
          <div class="info-card">
            <p><strong>Name:</strong> John Doe</p>
            <p><strong>Email:</strong> john.doe@example.com</p>
            <p><strong>Member since:</strong> January 2024</p>
          </div>
        </div>
        
        <div class="account-section">
          <h2>Account Settings</h2>
          <div class="settings-card">
            <button class="btn btn-primary">Edit Profile</button>
            <button class="btn btn-secondary">Change Password</button>
            <button class="btn btn-secondary">Privacy Settings</button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .account-page {
      padding: 2rem;
      max-width: 800px;
      margin: 0 auto;
    }
    
    .page-header {
      text-align: center;
      margin-bottom: 2rem;
      padding-bottom: 1rem;
      border-bottom: 2px solid #e9ecef;
    }
    
    .page-title {
      color: #333;
      font-size: 2.5rem;
      margin: 0 0 0.5rem 0;
      font-weight: 700;
    }
    
    .page-subtitle {
      font-size: 1.1rem;
      color: #6c757d;
      margin: 0;
    }
    
    .account-content {
      display: grid;
      gap: 2rem;
    }
    
    .account-section {
      background: #f8f9fa;
      padding: 1.5rem;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    
    .account-section h2 {
      color: #495057;
      font-size: 1.5rem;
      margin: 0 0 1rem 0;
      padding-bottom: 0.5rem;
      border-bottom: 1px solid #dee2e6;
    }
    
    .info-card p {
      margin: 0.5rem 0;
      font-size: 1rem;
      color: #495057;
    }
    
    .info-card strong {
      color: #343a40;
    }
    
    .settings-card {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
    }
    
    .btn {
      padding: 0.75rem 1.5rem;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 1rem;
      transition: background-color 0.3s ease;
    }
    
    .btn-primary {
      background-color: #007bff;
      color: white;
    }
    
    .btn-primary:hover {
      background-color: #0056b3;
    }
    
    .btn-secondary {
      background-color: #6c757d;
      color: white;
    }
    
    .btn-secondary:hover {
      background-color: #545b62;
    }
    
    @media (max-width: 768px) {
      .account-page {
        padding: 1rem;
      }
      
      .page-title {
        font-size: 2rem;
      }
      
      .settings-card {
        flex-direction: column;
      }
      
      .btn {
        width: 100%;
      }
    }
  `],
})
export class AccountComponent {
}