import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCard } from '../../components/course-card/course-card';

@Component({
  selector: 'app-course-list',
  imports: [CommonModule, CourseCard],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css',
})
export class CourseList implements OnInit {
  isLoading = true;
  courses = [
    { id: 1, name: 'Angular Core Concepts', code: 'ANG101', credits: 4, gradeStatus: 'passed' },
    { id: 2, name: 'RxJS Masterclass', code: 'RX201', credits: 3, gradeStatus: 'pending' },
    { id: 3, name: 'NgRx State Management', code: 'NGRX301', credits: 5, gradeStatus: 'passed' },
    { id: 4, name: 'Advanced CSS for Angular', code: 'CSS202', credits: 2, gradeStatus: 'failed' },
    { id: 5, name: 'Unit Testing with Jasmine', code: 'TST400', credits: 3, gradeStatus: 'pending' }
  ];

  selectedCourseId: number | null = null;

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  }

  onEnroll(courseId: number) {
    console.log('Enrolling in course: ' + courseId);
    this.selectedCourseId = courseId;
  }

  trackByCourseId(index: number, course: any) {
    return course.id; // trackBy improves performance by only re-rendering changed items
  }
}
