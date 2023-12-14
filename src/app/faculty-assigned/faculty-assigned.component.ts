// faculty-assigned.component.ts

import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-faculty-assigned',
  templateUrl: './faculty-assigned.component.html',
  styleUrls: ['./faculty-assigned.component.css']
})
export class FacultyAssignedComponent implements OnInit {
  facultyDetails: any;

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.loadFacultyDetails();
  }

  loadFacultyDetails() {
    this.courseService.getFacultyAssigned().subscribe((data) => {
      this.facultyDetails = data;
    });
  }
}
