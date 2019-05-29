import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../pages/home/home.component';
import { BlogComponent } from '../pages/blog/blog.component';
import { ContactComponent } from '../pages/contact/contact.component';
import { MatInputModule, MatButtonModule, MatCardModule, MatFormFieldModule, MatTableModule,
  MatSidenavModule, MatRadioModule, MatDialogModule, MatSlideToggleModule,
  MatCommonModule, MatCheckboxModule, MatIconModule, MatMenuModule, MatToolbarModule,
  MatListModule, MatProgressSpinnerModule
} from '@angular/material';

// import { BlogPostsService } from '../blog-posts.service';

@NgModule({
  declarations: [
    HomeComponent,
    BlogComponent,
    ContactComponent,
  ],
  imports: [
    CommonModule,
    MatCommonModule,
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
    // HttpClientModule,
    // BlogPostsService,
  ],
  exports: [
    HomeComponent,
    BlogComponent,
    ContactComponent,
  ],
  // providers: [
  //   BlogPostsService,
  // ]
})
export class PagesModule { }
