import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FormationsComponent } from './components/formations/formations.component';
import { FormationDetailComponent } from './components/formation-detail/formation-detail.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'formations', component: FormationsComponent },
  { path: 'formations/:id', component: FormationDetailComponent },
];
