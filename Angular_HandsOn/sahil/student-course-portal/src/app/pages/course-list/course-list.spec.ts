import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CourseList } from './course-list';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { loadCourses } from '../../store/course.actions';
import { Store } from '@ngrx/store';

describe('CourseList', () => {
  let component: CourseList;
  let fixture: ComponentFixture<CourseList>;
  let store: MockStore;

  const initialState = {
    course: { courses: [], loading: false, error: null }
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseList],
      providers: [provideMockStore({ initialState })]
    })
    .compileComponents();

    store = TestBed.inject(Store) as MockStore;
    spyOn(store, 'dispatch').and.callThrough();

    fixture = TestBed.createComponent(CourseList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch loadCourses action on init', () => {
    expect(store.dispatch).toHaveBeenCalledWith(loadCourses());
  });

  it('should set selectedCourseId onEnroll', () => {
    component.onEnroll(42);
    expect(component.selectedCourseId).toBe(42);
  });
});
