import { TeamPickerRoutingModule } from './team-picker-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamPickerComponent } from './team-picker/team-picker.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatRadioModule } from '@angular/material/radio';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ComponentsModule } from '../components/components.module';
import { SharedModule } from '@shared/shared.module';



@NgModule({
  declarations: [TeamPickerComponent],
  imports: [
    TeamPickerRoutingModule,
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
    ReactiveFormsModule,
  ],
})
export class TeamPickerModule { }
