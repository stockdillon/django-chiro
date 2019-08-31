import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule, MatButtonModule, MatCardModule, MatFormFieldModule, MatTableModule,
  MatSidenavModule, MatRadioModule, MatDialogModule, MatSlideToggleModule,
  // MatCommonModule,
  MatCheckboxModule, MatIconModule, MatMenuModule, MatToolbarModule,
  MatListModule, MatProgressSpinnerModule, MatRippleModule
} from '@angular/material';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import {MatExpansionModule} from '@angular/material/expansion';

import { HomeComponent } from '../pages/home/home.component';
import { BlogComponent } from '../pages/blog/blog.component';
import { ContactComponent } from '../pages/contact/contact.component';
import { BlogPostComponent } from './blog/blog-post/blog-post.component';
import { PizzaPartyComponent } from './blog/blog-post/blog-post.component';
import {ComponentsModule} from '../components/components.module';

import { ActivityComponent } from './activity/activity.component';
import { SharedModule } from '@shared/shared.module'

@NgModule({
  declarations: [
    HomeComponent,
    BlogComponent,
    ContactComponent,
    BlogPostComponent,
    PizzaPartyComponent,
    ActivityComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    // MatCommonModule,
    MatTableModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatRadioModule,
    MatDialogModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatExpansionModule,
    MatSnackBarModule,
    MatRippleModule,
    ComponentsModule,
    SharedModule,
  ],
  exports: [
    HomeComponent,
    BlogComponent,
    ContactComponent,
  ],
  providers: [
    // BlogPostsService,
    // QuoteService,
  ],
  entryComponents: [PizzaPartyComponent],
})
export class PagesModule { }
