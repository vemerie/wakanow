import { AppRoutes } from '../core/interfaces/app-route.interface';
import { AdminComponent } from './admin.component';

export const ADMIN_ROUTES: AppRoutes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'users',
        loadComponent: () =>
          import('./pages/users/users.component').then((m) => m.UsersComponent),
      },
      {
        path: '',
        redirectTo: 'users',
        pathMatch: 'full',
      },
    ],
  },
];
