# angular-lazy-import-jquery-example

Small example of an Angular App with lazy import of jQuery and a jQuery plugin

In a modern Angular App you don't want to include jQuery. But sometimes you have to.
If you have to, it would be great to include jQuery only when it's really unavoidable.

In this small example we show how to import jQuery dynamically,
so you don't have to include it in your bulk of javascript code loaded at app startup.
We use EcmaScript's new dynamic import statement to achieve that. TypeScript and AngularCLI (WebPack) already support this statement.


## How to

* change ```module``` from ```es2015``` to ```esnext``` in src/tsconfig.app.json
* add jQuery and a plugin to the project with ```npm install jquery @types/jquery jquery-lazyload```
* create a button and dynamically load a module in the click-handler via ```import('./loader')```
* in the loader-module first import jQuery with a regular import statement, then make jQuery globally available with ```(window as any).jQuery = jQuery;```
* after "exporting" jQuery dynamically load the plugin via ```import('jquery-lazyload').then(()) => { })``` (or use async/await instead of then) 

For a more versatile setup please take a look at the source code.


## Development 

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.5.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.
