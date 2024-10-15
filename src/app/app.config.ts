import { ApplicationConfig, LOCALE_ID, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './routes';
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
    providers: [provideRouter(routes),
    provideHttpClient(withFetch()),
    {provide: LOCALE_ID, useValue: 'pt-BR'}
  ]
};
