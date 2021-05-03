import { createReducer, on } from '@ngrx/store';
import { removeUser, setUser } from '../actions/user.actions';
import { User } from '../interfaces/user-interface/user-interface';

export const initialState: User = null

const _userReducer = createReducer(
    initialState,
    on(setUser, (state, payload) => {
        return state = payload.user;
    }),
    on(removeUser, (state) => {
        return state = null;
    }),
);

export function userReducer(state, action) {
    return _userReducer(state, action);
}