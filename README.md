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

4. Installing Webpack with Module Federation feature | Microfrontend | Amar Kumar Ram

Commands:

To install module federation into host-app:
ng add @angular-architects/module-federation --project host-app --port 4200

To install module federation into host-app:
ng add @angular-architects/module-federation --project mfe-app --port 4201

To serve host-app:
ng s host-app -o

To serve mfe-app:
ng s mfe-app -o

5. Microfrontend in Angular 15 | Module Federation | Webpack | Mono Repo | Mono Workspace | Amar Kumar Ram

6. HOST app creation in Mono workspace | Micro-frontend | Angular | Webpack | Amar Kumar Ram

To create components in host-app project:
ng g c home --project=host-app
ng g c to-do --project=host-app

7. MFE or SHELL app creation in Mono Workspace | Microfrontend | Webpack | Angular | Amar Kumar Ram

To create component -n mfe-app project:
ng g c to-do-list --project=mfe-app

8. MFE/SHELL app exposed with Webpack's Module Federation | Mono Workspace | Microfrontend | Angular

NOTE: remember to restart the server if you cannot observe any changes

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
