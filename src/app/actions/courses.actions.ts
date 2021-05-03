import { createAction, props } from '@ngrx/store';
import { Course } from '../interfaces/course-interface/course-interface';

export const set = createAction('[Courses] Set', props<{ courses: Course[] }>());
export const load = createAction('[Courses] Load', props<{ courses: Course[] }>());
export const add = createAction('[Courses] Add', props<{ course: Course }>());
export const edit = createAction('[Courses] Edit', props<{ course: Course }>());
export const remove = createAction('[Courses] Remove', props<{ courseId: number }>());