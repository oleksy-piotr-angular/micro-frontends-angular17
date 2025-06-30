# MonoWorkspace

SOURCE:
https://www.youtube.com/watch?v=1FWAGSVsmrI&list=PL1UWPWOy5UlfLWfSstHBW-iVu6RWJtrG-&index=1&ab_channel=AmarKumarRam

Tutorials:

1. Micro frontend introduction using Module Federation of Webpack 5 and Angular framework | Amar
2. Mono Repo | Multi Repo | Types of Microfrontend | Microfrontend Tutorial | Amar Kumar Ram
3. Mono Workspace Setup in Angular | Microfrontend | Amar Kumar Ram

Commands:

To create WorkSpace:
ng new <workspace-name> --create-application="false

To create application:
/<name>$ ng g application <application-name>

In this Tutorial we created 2 applications:

- /mono-workspace$ ng g application host-app --routing --style=scss
- /mono-workspace$ ng g application mfe-app --routing --style=scss

REMEMBER TO CLEANUP EACH Application in your WORKSPACE after you generate it.

4. Installing Webpack with Module Federation feature | Microfrontend | Amar Kumar Ram

Commands:

To serve host-app:
/mono-workspace$ ng s host-app -o

To serve mfe-app:
/mono-workspace$ ng s mfe-app -o

IF you NOT have WEBPACK 5:
/mono-workspace$ npm i webpack webpack-cli --save-dev

To install module federation into host-app:
/mono-workspace$ ng add @angular-architects/module-federation --project host-app --port 4200

To install module federation into mfe-app:
/mono-workspace$ ng add @angular-architects/module-federation --project mfe-app --port 4201

5. Microfrontend in Angular 15 | Module Federation | Webpack | Mono Repo | Mono Workspace | Amar Kumar Ram

To serve host-app:
/mono-workspace$ ng s host-app -o

To serve mfe-app:
/mono-workspace$ ng s mfe-app -o

But in this Workspace I'm using Angular 17 and --standalone=true

6. HOST app creation in Mono workspace | Micro-frontend | Angular | Webpack | Amar Kumar Ram

His Tutorial REPO:
https://github.com/amarkumarram/MicrofrontendTutorial

To create components in host-app project:
/mono-workspace$ ng g c home --project=host-app
/mono-workspace$ ng g c to-do --project=host-app

7. MFE or SHELL app creation in Mono Workspace | Microfrontend | Webpack | Angular | Amar Kumar Ram

To create component -n mfe-app project:
/mono-workspace$ ng g c to-do-list --project=mfe-app

If we are using "--standalone=false":
/mono-workspace$ ng g module to-do-list --project=mfe-app

in mfe-app/app.module.ts need to import "ToDoListModule"

In "mfe.routes.ts" need to add:
export const routes: Routes = [
{ path: '', redirectTo: '/todo-list', pathMatch: 'full' },
{ path: 'todo-list', component: ToDoListComponent },
];

and in mfe "app.component.html" need to have only:
<router-outlet></router-outlet>

Remember to import RouterOutlet in "mfe-app"

We move all code from ToDoComponent into ToDoListComponent of "mfe-app"

8. MFE/SHELL app exposed with Webpack's Module Federation | Mono Workspace | Microfrontend | Angular

   We need to check into the browser if we are getting "remoteEntry.js" when we serve "mfe-app":

http://localhost:4201/remoteEntry.js

NOTE:When we do changes into configuration file remember to restart the "mfe-app" server if you cannot observe any changes.

9. Consumed MFE at HOST with Module Federation and Angular in Mono Workspace | Amar Kumar Ram

---

if you have this error:
"Uncaught SyntaxError: Cannot use 'import.meta' outside a module (at styles.js:4522:29)"

you can ignore it because it happens only in development mode. In build there is no something like styles.js in Angular.

Ignore it (Most Common):

As mentioned in several discussions (e.g., on Stack Overflow and Nx documentation), this error often doesn't cause any actual breakages in your application.
It's a console warning that arises from Angular's compilation process for styles in development mode, not a critical runtime error for your Module Federation setup.
If your application is working as expected, you can often safely ignore this particular warning.

NOTE!:
because we are using "standalone=true" we cannot using a module so we implement consumption with this INFO:
"https://www.angulararchitects.io/en/blog/module-federation-with-angulars-standalone-components/"
