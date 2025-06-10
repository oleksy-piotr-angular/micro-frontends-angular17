import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'todo-list',
    loadComponent: () =>
      import('mfe/Component').then((m) => m.ToDoListComponent),
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

//we can export this and do not Duplicate the declaration if we
//  use @NgModules
export const routeCompArr = [HomeComponent];
