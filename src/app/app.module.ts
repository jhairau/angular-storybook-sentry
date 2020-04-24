import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ErrorHandler } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExampleComponentComponent } from './example-component/example-component.component';
import { ErrorHandling } from './error-handling';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    {provide: ErrorHandler, useClass: ErrorHandling}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
