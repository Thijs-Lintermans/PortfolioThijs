import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', loadComponent: () => import('./components/about/about.component').then(m => m.AboutComponent) },
    { path: 'internship', loadComponent: () => import('./components/internship/internship.component').then(m => m.InternshipComponent) },
    { path: 'projects', loadComponent: () => import('./components/projects/projects.component').then(m => m.ProjectsComponent) }
];
