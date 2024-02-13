import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

  // Ici seront lancés les modules d'Angular, pour avoir accès à toutes les fonctionnalités des components par exemple //