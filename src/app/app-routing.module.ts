import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home/home.page';
import { CoursesPage } from './courses/courses.page';

const routes: Routes = [
  { path: '', component: HomePage },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'courses', component: CoursesPage},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
