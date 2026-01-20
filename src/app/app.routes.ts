import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/components/home/home.component';
import { LoginComponent } from './pages/autenticacao/components/login/login.component';
import { DashboardComponent } from './pages/home/components/dashboard/dashboard.component';

export const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'login/:tipo', component: LoginComponent }
    ]
  },
  { path: '**', redirectTo: '' }
];