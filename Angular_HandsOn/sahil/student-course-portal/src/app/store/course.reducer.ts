import { createReducer, on } from '@ngrx/store';
import { CourseData } from '../services/course';
import * as CourseActions from './course.actions';

export interface CourseState {
  courses: CourseData[];
  loading: boolean;
  error: string | null;
}

export const initialState: CourseState = {
  courses: [],
  loading: false,
  error: null
};

export const courseReducer = createReducer(
  initialState,
  on(CourseActions.loadCourses, state => ({ ...state, loading: true })),
  on(CourseActions.loadCoursesSuccess, (state, { courses }) => ({
    ...state,
    loading: false,
    courses,
    error: null
  })),
  on(CourseActions.loadCoursesFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  }))
);
