import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';

import { provideAnimations} from '@angular/platform-browser/animations';

bootstrapApplication(AppComponent, {
  providers: [
    // HTTP Client
    provideHttpClient(withInterceptorsFromDi()),
    // Rotas da aplicação
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),

    provideAnimations(),

  ],
}) .catch(err => console.error(err));
