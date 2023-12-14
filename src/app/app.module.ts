// app.module.ts

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterCourseComponent } from './register-course/register-course.component';
import { RegisteredCoursesComponent } from './registered-courses/registered-courses.component';
import { FacultyAssignedComponent } from './faculty-assigned/faculty-assigned.component';
import { CourseService } from './course.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card'; // Add this line
import { MatFormFieldModule } from '@angular/material/form-field'; // Add this line
import { MatInputModule } from '@angular/material/input'; // Add this line
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';


@NgModule({
  declarations: [
    AppComponent,
    RegisterCourseComponent,
    RegisteredCoursesComponent,
    FacultyAssignedComponent,
 // Add this line
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTabsModule,
    MatCardModule, // Add this line
    MatFormFieldModule, // Add this line
    MatInputModule, // Add this line
    MatButtonModule, // Add this line
    MatListModule,

  ],
  providers: [CourseService],
  bootstrap: [AppComponent],
})
export class AppModule {}
