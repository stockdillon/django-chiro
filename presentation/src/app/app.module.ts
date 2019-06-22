import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
          MatButtonModule,
          MatSidenavModule,
          MatCommonModule,
          MatIconModule,
        } from '@angular/material';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatListModule} from '@angular/material/list';


import { AppRoutingModule } from './app-routing.module';
import {APP_BASE_HREF} from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import { PagesModule } from './pages/pages.module';
import { NavModule } from './nav/nav.module';

import { ComponentsModule } from './components/components.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    PagesModule,
    NavModule,
    ComponentsModule,
  ],
  exports: [
    HttpClientModule,
  ],
  providers: [{provide: APP_BASE_HREF, useValue: ''}],
  bootstrap: [AppComponent]
})
export class AppModule { }
