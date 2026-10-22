import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

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
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}