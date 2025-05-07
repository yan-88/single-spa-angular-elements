import { createApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { createCustomElement } from '@angular/elements';

// bootstrapApplication(AppComponent, appConfig).catch((err) =>
//   console.error(err)
// );

(async () => {
  const { injector } = await createApplication(appConfig);
  const appElement = createCustomElement(AppComponent, {
    injector,
  });
  customElements.define('my-first-web-component', appElement);
})();
