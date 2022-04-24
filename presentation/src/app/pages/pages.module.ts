import { ProjectsModule } from './projects/projects.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { 
// MatCommonModule,
MatCheckboxModule } from '@angular/material/checkbox';
import { MatRippleModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
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
    ProjectsModule,
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
    MatTooltipModule,
    MatPaginatorModule,
    ComponentsModule,
    SharedModule,
  ],
  exports: [
    HomeComponent,
    BlogComponent,
    ContactComponent,
    ProjectsModule,
  ],
  providers: [
    // BlogPostsService,
    // QuoteService,
  ],
  entryComponents: [PizzaPartyComponent],
})
export class PagesModule { }
