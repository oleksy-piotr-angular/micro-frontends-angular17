import { Routes } from '@angular/router';
import { ToDoListComponent } from './to-do-list/to-do-list.component';

export const routes: Routes = [
  { path: '', redirectTo: '/todo-list', pathMatch: 'full' },
  { path: 'todo-list', component: ToDoListComponent },
];
