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
        <!-- Profile Information -->
        <div class="account-section">
          <h2>Profile Information</h2>
          <div class="info-card">
            <div class="profile-avatar">
              <div class="avatar-circle">{{ userData.name.charAt(0) }}</div>
              <button class="btn btn-outline">Change Photo</button>
            </div>
            <div class="profile-details">
              <div class="detail-row">
                <strong>Full Name:</strong> {{ userData.name }}
              </div>
              <div class="detail-row">
                <strong>Email:</strong> {{ userData.email }}
              </div>
              <div class="detail-row">
                <strong>Phone:</strong> {{ userData.phone }}
              </div>
              <div class="detail-row">
                <strong>Location:</strong> {{ userData.location }}
              </div>
              <div class="detail-row">
                <strong>Member since:</strong> {{ userData.memberSince }}
              </div>
              <div class="detail-row">
                <strong>Account Status:</strong> 
                <span class="status-badge active">{{ userData.status }}</span>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Account Statistics -->
        <div class="account-section">
          <h2>Account Statistics</h2>
          <div class="stats-grid">
            <div class="stat-card">
              <div class="stat-number">{{ stats.totalOrders }}</div>
              <div class="stat-label">Total Orders</div>
            </div>
            <div class="stat-card">
              <div class="stat-number">\${{ stats.totalSpent }}</div>
              <div class="stat-label">Total Spent</div>
            </div>
            <div class="stat-card">
              <div class="stat-number">{{ stats.rewardPoints }}</div>
              <div class="stat-label">Reward Points</div>
            </div>
            <div class="stat-card">
              <div class="stat-number">{{ stats.savedItems }}</div>
              <div class="stat-label">Saved Items</div>
            </div>
          </div>
        </div>
        
        <!-- Recent Activity -->
        <div class="account-section">
          <h2>Recent Activity</h2>
          <div class="activity-list">
            <div *ngFor="let activity of recentActivity" class="activity-item">
              <div class="activity-icon">{{ activity.icon }}</div>
              <div class="activity-details">
                <div class="activity-title">{{ activity.title }}</div>
                <div class="activity-date">{{ activity.date }}</div>
              </div>
              <div class="activity-status">{{ activity.status }}</div>
            </div>
          </div>
        </div>
        
        <!-- Billing Information -->
        <div class="account-section">
          <h2>Billing Information</h2>
          <div class="billing-cards">
            <div *ngFor="let card of paymentMethods" class="payment-card">
              <div class="card-info">
                <div class="card-type">{{ card.type }}</div>
                <div class="card-number">**** **** **** {{ card.lastFour }}</div>
                <div class="card-expiry">Expires {{ card.expiry }}</div>
              </div>
              <div class="card-actions">
                <button class="btn btn-sm btn-secondary">Edit</button>
                <button class="btn btn-sm btn-outline">Remove</button>
              </div>
            </div>
            <button class="btn btn-outline add-card-btn">+ Add New Card</button>
          </div>
        </div>
        
        <!-- Account Settings -->
        <div class="account-section">
          <h2>Account Settings</h2>
          <div class="settings-grid">
            <button class="btn btn-primary">Edit Profile</button>
            <button class="btn btn-secondary">Change Password</button>
            <button class="btn btn-secondary">Privacy Settings</button>
            <button class="btn btn-secondary">Notification Preferences</button>
            <button class="btn btn-secondary">Two-Factor Authentication</button>
            <button class="btn btn-outline">Download Data</button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .account-page {
      padding: 2rem;
      max-width: 1000px;
      margin: 0 auto;
      background: #f8f9fa;
      min-height: 100vh;
    }
    
    .page-header {
      text-align: center;
      margin-bottom: 3rem;
      padding: 2rem;
      background: white;
      border-radius: 12px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
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
      background: white;
      padding: 2rem;
      border-radius: 12px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.08);
    }
    
    .account-section h2 {
      color: #495057;
      font-size: 1.5rem;
      margin: 0 0 1.5rem 0;
      padding-bottom: 0.5rem;
      border-bottom: 2px solid #e9ecef;
    }
    
    /* Profile Information Styles */
    .info-card {
      display: flex;
      gap: 2rem;
      align-items: flex-start;
    }
    
    .profile-avatar {
      text-align: center;
      flex-shrink: 0;
    }
    
    .avatar-circle {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      background: #007bff;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
      font-weight: bold;
      margin-bottom: 1rem;
    }
    
    .profile-details {
      flex: 1;
    }
    
    .detail-row {
      margin: 1rem 0;
      padding: 0.5rem 0;
      border-bottom: 1px solid #f1f3f4;
    }
    
    .detail-row strong {
      color: #343a40;
      display: inline-block;
      width: 120px;
    }
    
    .status-badge {
      padding: 0.25rem 0.75rem;
      border-radius: 20px;
      font-size: 0.875rem;
      font-weight: 500;
    }
    
    .status-badge.active {
      background: #d4edda;
      color: #155724;
    }
    
    /* Statistics Styles */
    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1.5rem;
    }
    
    .stat-card {
      text-align: center;
      padding: 1.5rem;
      background: #f8f9fa;
      border-radius: 8px;
      border-left: 4px solid #007bff;
    }
    
    .stat-number {
      font-size: 2rem;
      font-weight: bold;
      color: #007bff;
      margin-bottom: 0.5rem;
    }
    
    .stat-label {
      color: #6c757d;
      font-size: 0.875rem;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    
    /* Activity Styles */
    .activity-list {
      max-height: 400px;
      overflow-y: auto;
    }
    
    .activity-item {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 1rem 0;
      border-bottom: 1px solid #e9ecef;
    }
    
    .activity-icon {
      width: 40px;
      height: 40px;
      background: #e9ecef;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.2rem;
    }
    
    .activity-details {
      flex: 1;
    }
    
    .activity-title {
      font-weight: 500;
      color: #333;
      margin-bottom: 0.25rem;
    }
    
    .activity-date {
      color: #6c757d;
      font-size: 0.875rem;
    }
    
    .activity-status {
      font-size: 0.875rem;
      color: #28a745;
      font-weight: 500;
    }
    
    /* Billing Styles */
    .billing-cards {
      display: grid;
      gap: 1rem;
    }
    
    .payment-card {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1.5rem;
      background: #f8f9fa;
      border-radius: 8px;
      border: 1px solid #dee2e6;
    }
    
    .card-type {
      font-weight: bold;
      color: #007bff;
      margin-bottom: 0.25rem;
    }
    
    .card-number {
      font-family: monospace;
      color: #495057;
    }
    
    .card-expiry {
      font-size: 0.875rem;
      color: #6c757d;
    }
    
    .card-actions {
      display: flex;
      gap: 0.5rem;
    }
    
    .add-card-btn {
      margin-top: 1rem;
      width: 100%;
      padding: 1rem;
    }
    
    /* Settings Styles */
    .settings-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1rem;
    }
    
    /* Button Styles */
    .btn {
      padding: 0.75rem 1.5rem;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      font-size: 1rem;
      transition: all 0.3s ease;
      text-align: center;
      display: inline-block;
    }
    
    .btn-sm {
      padding: 0.5rem 1rem;
      font-size: 0.875rem;
    }
    
    .btn-primary {
      background-color: #007bff;
      color: white;
    }
    
    .btn-primary:hover {
      background-color: #0056b3;
      transform: translateY(-1px);
    }
    
    .btn-secondary {
      background-color: #6c757d;
      color: white;
    }
    
    .btn-secondary:hover {
      background-color: #545b62;
    }
    
    .btn-outline {
      background-color: transparent;
      color: #007bff;
      border: 2px solid #007bff;
    }
    
    .btn-outline:hover {
      background-color: #007bff;
      color: white;
    }
    
    @media (max-width: 768px) {
      .account-page {
        padding: 1rem;
      }
      
      .page-title {
        font-size: 2rem;
      }
      
      .info-card {
        flex-direction: column;
        text-align: center;
      }
      
      .stats-grid {
        grid-template-columns: repeat(2, 1fr);
      }
      
      .settings-grid {
        grid-template-columns: 1fr;
      }
      
      .payment-card {
        flex-direction: column;
        gap: 1rem;
        text-align: center;
      }
      
      .detail-row strong {
        width: auto;
        display: block;
        margin-bottom: 0.25rem;
      }
    }
  `],
})
export class AccountComponent {
  userData = {
    name: 'Sarah Johnson',
    email: 'sarah.johnson@email.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    memberSince: 'March 2023',
    status: 'Active'
  };

  stats = {
    totalOrders: 24,
    totalSpent: '1,847',
    rewardPoints: 3420,
    savedItems: 12
  };

  recentActivity = [
    {
      icon: '📦',
      title: 'Order #ORD-2024-001 shipped',
      date: 'Today, 2:30 PM',
      status: 'Delivered'
    },
    {
      icon: '💳',
      title: 'Payment processed for Order #ORD-2024-002',
      date: 'Yesterday, 4:15 PM',
      status: 'Completed'
    },
    {
      icon: '⭐',
      title: 'You earned 50 reward points',
      date: '2 days ago',
      status: 'Added'
    },
    {
      icon: '🔒',
      title: 'Password changed successfully',
      date: '1 week ago',
      status: 'Completed'
    },
    {
      icon: '📧',
      title: 'Email preferences updated',
      date: '2 weeks ago',
      status: 'Updated'
    }
  ];

  paymentMethods = [
    {
      type: 'Visa',
      lastFour: '4242',
      expiry: '12/26'
    },
    {
      type: 'Mastercard',
      lastFour: '8888',
      expiry: '08/25'
    }
  ];
}