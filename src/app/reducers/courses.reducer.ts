import { createReducer, on } from '@ngrx/store';
import { set, add, edit, remove, load } from '../actions/courses.actions';
import { Course } from '../interfaces/course-interface/course-interface';

export const initialState: Course[] = [];

const _coursesReducer = createReducer(
    initialState,
    on(set, (state, payload) => {
        return state = payload.courses;
    }),
    on(load, (state, payload) => {
        state = state.concat(payload.courses);
        return state;
    }),
    on(add, (state, payload) => {
        state = state.concat(payload.course)
        console.log(state);
        return state;
    }),
    on(edit, (state, payload) => {
        return state = state.map(course => {
            if (course.id === payload.course.id) { return payload.course; }
            return course;
        })
    }),
    on(remove, (state, payload) => {
        return state = state.filter(course => course.id !== payload.courseId)
    })
);

export function coursesReducer(state, action) {
    return _coursesReducer(state, action);
}