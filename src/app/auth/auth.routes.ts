import { AuthComponent } from './auth.component';
import { AppRoutes } from '../core/interfaces/app-route.interface';

export const AUTH_ROUTES: AppRoutes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'login',
        loadComponent: () =>
          import('./pages/login/login.component').then((m) => m.LoginComponent),
      },
      {
        path: 'register',
        loadComponent: () =>
          import('./pages/register/register.component').then(
            (m) => m.RegisterComponent
          ),
      },
      {
        path: '',
        redirectTo: 'register',
        pathMatch: 'full',
      },
    ],
  },
];
