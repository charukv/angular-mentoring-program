import { createReducer, on } from '@ngrx/store';
import { get, remove, set } from '../actions/auth.actions';

export const initialState: string = null

const _authReducer = createReducer(
    initialState,
    on(set, (state, payload) => {
        return state = payload.token;
    }),
    on(get, (state) => {
        return state;
    }),
    on(remove, (state) => {
        return state = null;
    }),
);

export function authReducer(state, action) {
    return _authReducer(state, action);
}