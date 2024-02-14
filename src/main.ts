import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NgModule } from '@angular/core';

@NgModule ({
  imports: [
    MatSlideToggleModule,
  ]
})
class AppModule {}

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));