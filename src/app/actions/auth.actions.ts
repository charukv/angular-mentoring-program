import { createAction, props } from '@ngrx/store';

export const set = createAction('[Auth Token] Set', props<{ token: string }>());
export const get = createAction('[Auth Token] Get');
export const remove = createAction('[Auth Token] Remove');
