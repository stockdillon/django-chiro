import { SharedModule } from '@shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { PagesModule } from '../pages/pages.module';
// import { NavComponent } from './nav/nav.component';
import { NavRoutingModule } from './nav-routing.module';
import { MatTooltipModule } from '@angular/material/tooltip';


@NgModule({
  declarations: [NavComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatTooltipModule,
    PagesModule,
    NavRoutingModule,
    SharedModule
  ],
  exports: [
    NavComponent,
  ]
})
export class NavModule { }
