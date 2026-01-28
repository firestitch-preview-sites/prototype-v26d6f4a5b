import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { AccountComponent } from './account.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'account', component: AccountComponent },
  { path: '**', redirectTo: '' }
];