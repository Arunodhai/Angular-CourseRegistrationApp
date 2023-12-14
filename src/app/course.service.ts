// course.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  registerCourse(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register-course`, data);
  }

  getRegisteredCourses(): Observable<any> {
    return this.http.get(`${this.apiUrl}/registered-courses`);
  }

  getFacultyAssigned(): Observable<any> {
    return this.http.get(`${this.apiUrl}/faculty-assigned`);
  }
}
