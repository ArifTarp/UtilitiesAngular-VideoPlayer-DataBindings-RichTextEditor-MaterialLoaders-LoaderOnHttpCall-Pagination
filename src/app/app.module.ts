import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularMaterialLoadersComponent } from './angular-material-loaders/angular-material-loaders.component';
import { MyLoaderComponent } from './my-loader/my-loader.component';
import { LoaderService } from './services/loader.service';
import { LoaderInterceptor } from './services/loader-interceptor.service';
import { PaginationComponent } from './pagination/pagination.component';
import { OneWayTwoWayBindingComponent } from './oneWay-twoWay-binding/oneWay-twoWay-binding.component';

@NgModule({
   declarations: [
      AppComponent,
      AngularMaterialLoadersComponent,
      MyLoaderComponent,
      PaginationComponent,
      OneWayTwoWayBindingComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      MatProgressSpinnerModule,
      MatProgressBarModule,
      HttpClientModule,
      NgbModule,
      FormsModule
   ],
   providers: [
      LoaderService,
      { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
