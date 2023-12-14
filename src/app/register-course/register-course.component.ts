// register-course.component.ts

import { Component } from '@angular/core';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-register-course',
  templateUrl: './register-course.component.html',
  styleUrls: ['./register-course.component.css']
})
export class RegisterCourseComponent {

  name: string = "";
  rollNo: string="";
  course: string="";
  semester: string="";

  constructor(private courseService: CourseService) { }

  registerCourse(data: any): void {
    this.courseService.registerCourse(data).subscribe(response => {
      console.log(response);
    });
  }
}
