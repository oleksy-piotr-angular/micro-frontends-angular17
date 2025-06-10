import { ToDoListComponent } from './../../../mfe-app/src/app/to-do-list/to-do-list.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { loadRemoteModule } from '@angular-architects/module-federation';

const remoteEntryUrl = 'http://localhost:4201/mfeTodoList.js';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'todo-list',
    loadComponent: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: remoteEntryUrl,
        exposedModule: './Component',
      }).then((m) => {
        return m.ToDoListComponent;
      }),
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

//we can export this and do not Duplicate the declaration if we
//  use @NgModules
export const routeCompArr = [HomeComponent];
