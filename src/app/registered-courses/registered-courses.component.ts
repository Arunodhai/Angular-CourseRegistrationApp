// registered-courses.component.ts

import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-registered-courses',
  templateUrl: './registered-courses.component.html',
  styleUrls: ['./registered-courses.component.css']
})
export class RegisteredCoursesComponent implements OnInit {
  registeredCourses: any[] = [];

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.courseService.getRegisteredCourses().subscribe(data => {
      this.registeredCourses = data;
    });
  }
}
