// app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterCourseComponent } from './register-course/register-course.component';
import { RegisteredCoursesComponent } from './registered-courses/registered-courses.component';
import { FacultyAssignedComponent } from './faculty-assigned/faculty-assigned.component';

const routes: Routes = [
  { path: 'register-course', component: RegisterCourseComponent },
  { path: 'registered-courses', component: RegisteredCoursesComponent },
  { path: 'faculty-assigned', component: FacultyAssignedComponent },
  { path: '', redirectTo: '/register-course', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
