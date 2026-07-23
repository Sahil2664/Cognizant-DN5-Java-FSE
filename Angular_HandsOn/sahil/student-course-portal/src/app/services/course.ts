import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface CourseData {
  id: number;
  name: string;
  code: string;
  credits: number;
  gradeStatus: string;
}

@Injectable({
  providedIn: 'root',
})
export class Course {
  private apiUrl = 'http://localhost:3000/courses';

  constructor(private http: HttpClient) {}

  getCourses(): Observable<CourseData[]> {
    return this.http.get<CourseData[]>(this.apiUrl);
  }

  getCourseById(id: number): Observable<CourseData> {
    return this.http.get<CourseData>(`${this.apiUrl}/${id}`);
  }
}
