import { SharedModule } from '@shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';

import { MatInputModule, MatButtonModule, MatCardModule, MatFormFieldModule,MatTableModule,
  MatSidenavModule, MatRadioModule, MatDialogModule, MatSlideToggleModule,
  MatCommonModule, MatCheckboxModule, MatIconModule, MatMenuModule
} from '@angular/material';
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
