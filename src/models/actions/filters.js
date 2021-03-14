import { SET_TITLE_FILTER, SET_AUTHOR_FILTER } from './actionTypes';

export const setAuthorFilter = (value) => ({
	type: SET_AUTHOR_FILTER,
	payload: value,
});

export const setTitleFilter = (value) => ({
	type: SET_TITLE_FILTER,
	payload: value,
});
