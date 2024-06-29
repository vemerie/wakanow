import { Routes } from '@angular/router';
import { AppRoutes } from './core/interfaces/app-route.interface';
import { AuthComponent } from './auth/auth.component';

export const APP_BASE_ROUTES_DEFINITION = {
  AUTH: '/auth',
  ADMIN: '/admin',
};

export const APP_BASE_ROUTES: AppRoutes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.routes').then((m) => m.AUTH_ROUTES),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.routes').then((m) => m.ADMIN_ROUTES),
  },
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: AuthComponent,
  },
];
