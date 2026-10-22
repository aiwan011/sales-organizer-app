import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

<<<<<<< HEAD
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular';
import { IonicModule } from '@ionic/angular/lazy';
import { IonicStorageModule } from '@ionic/storage-angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './about/about.component'; // Imports the new component

@NgModule({
  declarations: [
    AppComponent, 
    AboutComponent // Registers the component so HTML tags work!
  ],
  imports: [
    BrowserModule,
    IonicModule,
    AppRoutingModule,
    IonicStorageModule.forRoot()
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular()
=======
// Modern 2026 Ionic imports (No Firebase)
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular';
import { IonicModule } from '@ionic/angular/lazy';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule,
    AppRoutingModule
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular() 
>>>>>>> 4f63c2e4a20a3a814b36a9da2640f5e89833eb76
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}