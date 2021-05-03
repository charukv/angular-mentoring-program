import { createAction, props } from '@ngrx/store';
import { User } from '../interfaces/user-interface/user-interface';

export const setUser = createAction('[User] Set', props<{ user: User }>());
export const removeUser = createAction('[User] Remove');
