# demo-angular-app

## pre-reqs -
  1) Node.js and npm: Ensure you have Node.js installed (preferably the latest LTS version). npm (Node Package Manager) comes bundled with it. You can download it from nodejs.org.
        bash

         node -v
         npm -v

  2) Angular CLI: Install the Angular Command Line Interface (CLI) globally to simplify project setup and management.
    Run this command in your terminal:
        bash

         npm install -g @angular/cli

    Verify installation:
        bash

         ng version



## Steps to Bootstrap an Angular Project
Create a New Angular Project
Use the Angular CLI to generate a new project:

  bash

    ng new demo-angular-app --directory .
    

Replace my-angular-app with your desired project name.

The CLI will prompt you with a few questions:
Would you like to add Angular routing? (Yes/No) – Choose based on your needs.

Which stylesheet format would you like to use? (e.g., CSS, SCSS, etc.) – Pick your preference.

This command creates a folder (my-angular-app) with a basic Angular project structure.

Navigate to the Project Directory
Move into your project folder:
  
  bash

    cd my-angular-app

Run the Application
Start the development server:
  
  bash

    ng serve

Open your browser and go to http://localhost:4200/. You should see the default Angular welcome page.

Explore the Project Structure
Key files and folders:
src/app/app.module.ts: The root module where components, services, and dependencies are declared.

src/app/app.component.ts: The root component of your app.

src/index.html: The main HTML file where Angular bootstraps.

src/main.ts: The entry point that bootstraps the app module.

Customize the Bootstrap Process (Optional)
Angular’s bootstrapping happens in main.ts. By default, it looks like this:
typescript

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

You can modify this if you need custom bootstrapping logic (e.g., dynamic environment loading).

Add Dependencies (Optional)
Install additional libraries (e.g., Bootstrap for styling):

  bash

    npm install bootstrap

Include it in your project by adding it to angular.json under "styles":
json

"styles": [
  "node_modules/bootstrap/dist/css/bootstrap.min.css",
  "src/styles.css"
]

Build and Deploy (When Ready)
To create a production build:

  bash

    ng build --prod

The output will be in the dist/ folder, ready to deploy to a web server.

