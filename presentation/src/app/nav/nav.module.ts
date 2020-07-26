import { SharedModule } from '@shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCommonModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import { PagesModule } from '../pages/pages.module';
// import { NavComponent } from './nav/nav.component';
import { NavRoutingModule } from './nav-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [NavComponent],
  imports: [
    CommonModule,
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
    NavRoutingModule,
    SharedModule
  ],
  exports: [
    NavComponent,
  ]
})
export class NavModule { }
