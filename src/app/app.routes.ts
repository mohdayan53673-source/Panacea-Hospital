import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./home/home').then(m => m.Home) },
  { path: 'medical-departments-services', loadComponent: () => import('./Medical departments/Medical department').then(m => m.Services) },
  { path: 'services', redirectTo: 'medical-departments-services', pathMatch: 'full' }, 
  { path: 'technology', loadComponent: () => import('./technology').then(m => m.Technology) },
  { path: 'facilities', redirectTo: 'technology', pathMatch: 'full' },
  { path: 'patient-care', loadComponent: () => import('./patient-care/patient-care').then(m => m.PatientCare) },
  { path: 'about', loadComponent: () => import('./about/about').then(m => m.About) },
  { path: 'appointment', loadComponent: () => import('./appointment/appointment').then(m => m.Appointment) },
  { path: 'contact', loadComponent: () => import('./contact/contact').then(m => m.Contact) },  
  { path: '**', redirectTo: '' },
];
