import { TeamPickerComponent } from './team-picker/team-picker.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: TeamPickerComponent,
  },
  {
    path: '**',
    component: TeamPickerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamPickerRoutingModule { }
