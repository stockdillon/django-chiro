import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatInputModule, MatButtonModule, MatCardModule, MatFormFieldModule,MatTableModule,
          MatSidenavModule, MatRadioModule, MatDialogModule, MatSlideToggleModule,
          MatCommonModule, MatCheckboxModule, MatIconModule, MatMenuModule
        } from '@angular/material';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatListModule} from '@angular/material/list';


import { AppRoutingModule } from './app-routing.module';
import {APP_BASE_HREF} from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
// import { BlogComponent } from './pages/blog/blog.component';
// import { HomeComponent } from './pages/home/home.component';
import { PagesModule } from './pages/pages.module';
// import { BlogPostsService } from './blog-posts.service';




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
    // MatCommonModule,
    // MatTableModule,
    // MatCardModule,
    // MatInputModule,
    // MatFormFieldModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    // MatRadioModule,
    // MatDialogModule,
    // MatSlideToggleModule,
    // MatCheckboxModule,
    MatIconModule,
    MatListModule,
    // MatMenuModule,
    // MatProgressSpinnerModule,
    // HttpClientModule,
    // BlogPostsService,
    PagesModule,
  ],
  exports: [
    // MatCommonModule,
    // MatTableModule,
    // MatCardModule,
    // MatInputModule,
    // MatFormFieldModule,
    // MatButtonModule,
    // MatToolbarModule,
    // MatSidenavModule,
    // MatRadioModule,
    // MatDialogModule,
    // MatSlideToggleModule,
    // MatCheckboxModule,
    // MatIconModule,
    // MatListModule,
    // MatMenuModule,
    // MatProgressSpinnerModule,
    HttpClientModule,
    // BlogPostsService,
  ],
  providers: [{provide: APP_BASE_HREF, useValue: ''}],
  bootstrap: [AppComponent]
})
export class AppModule { }
