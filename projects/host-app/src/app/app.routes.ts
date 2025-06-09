import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ToDoComponent } from './to-do/to-do.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'todo-list', component: ToDoComponent },
];

//we can export this and do not Duplicate the declaration if we use @NgModules
export const routeCompArr = [HomeComponent, ToDoComponent];
