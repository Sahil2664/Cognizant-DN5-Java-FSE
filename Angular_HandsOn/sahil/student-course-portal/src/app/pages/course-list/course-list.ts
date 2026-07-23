import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCard } from '../../components/course-card/course-card';

@Component({
  selector: 'app-course-list',
  imports: [CommonModule, CourseCard],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css',
})
export class CourseList {
  courses = [
    { id: 1, name: 'Angular Core Concepts', code: 'ANG101', credits: 4 },
    { id: 2, name: 'RxJS Masterclass', code: 'RX201', credits: 3 },
    { id: 3, name: 'NgRx State Management', code: 'NGRX301', credits: 5 },
    { id: 4, name: 'Advanced CSS for Angular', code: 'CSS202', credits: 2 },
    { id: 5, name: 'Unit Testing with Jasmine', code: 'TST400', credits: 3 }
  ];

  selectedCourseId: number | null = null;

  onEnroll(courseId: number) {
    console.log('Enrolling in course: ' + courseId);
    this.selectedCourseId = courseId;
  }
}
