import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule, MatButtonModule, MatCardModule, MatFormFieldModule, MatTableModule,
  MatSidenavModule, MatRadioModule, MatDialogModule, MatSlideToggleModule,
  // MatCommonModule,
  MatCheckboxModule, MatIconModule, MatMenuModule, MatToolbarModule,
  MatListModule, MatProgressSpinnerModule
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

@NgModule({
  declarations: [
    HomeComponent,
    BlogComponent,
    ContactComponent,
    BlogPostComponent,
    PizzaPartyComponent,
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
    ComponentsModule,
  ],
  exports: [
    HomeComponent,
    BlogComponent,
    ContactComponent,
  ],
  // providers: [
  //   BlogPostsService,
  // ]
  entryComponents: [PizzaPartyComponent],
})
export class PagesModule { }
