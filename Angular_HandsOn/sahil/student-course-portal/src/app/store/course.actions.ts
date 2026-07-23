import { createAction, props } from '@ngrx/store';
import { CourseData } from '../services/course';

export const loadCourses = createAction('[Course List] Load Courses');

export const loadCoursesSuccess = createAction(
  '[Course List] Load Courses Success',
  props<{ courses: CourseData[] }>()
);

export const loadCoursesFailure = createAction(
  '[Course List] Load Courses Failure',
  props<{ error: string }>()
);
