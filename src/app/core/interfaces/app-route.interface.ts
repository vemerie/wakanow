import { Route } from '@angular/router';

export interface AppRoute extends Route {
  children?: AppRoute[];
}

export type AppRoutes = AppRoute[];
