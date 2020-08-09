import { TeamPickerComponent } from './team-picker/team-picker/team-picker.component';
import { ActivityComponent } from './pages/activity/activity.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
   {
    path: 'blog',
    component: BlogComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'activity',
    component: ActivityComponent,
  },
  {
    path: 'projects',
    loadChildren: () => import('./team-picker/team-picker.module').then(m => m.TeamPickerModule)
  },
  {
    path: '**',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
