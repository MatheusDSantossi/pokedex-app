import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';

import { IonicStorageModule } from '@ionic/storage-angular';
import { importProvidersFrom } from '@angular/core';

bootstrapApplication(AppComponent, {
  providers: [
    // HTTP Client
    provideHttpClient(withInterceptorsFromDi()),
    // Rotas da aplicação
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),

    // importProvidersFrom(
    //   IonicStorageModule.forRoot({
    //     name: 'pokedex_db',
    //     driverOrder: ['indexddb', 'localstorage']
    //   })
    // )
  ],
}) .catch(err => console.error(err));
