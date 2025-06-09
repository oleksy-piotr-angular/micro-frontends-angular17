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

4. Installing Webpack with Module Federation feature | Microfrontned | Amar Kumar Ram

Commands:

To install module federation into host-app:
ng add @angular-architects/module-federation --project host-app --port 4200

To install module federation into host-app:
ng add @angular-architects/module-federation --project mfe-app --port 4201

To serve host-app:
ng s host-app -o

To serve mfe-app:
ng s mfe-app -o

5. Microfrontend in Angular 15 | Module Federation | Webpack | Mono Repo | Mono Workspace | Amar
