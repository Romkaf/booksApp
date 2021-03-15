import { SET_CURRENT_PAGE } from './actionTypes';

export const setCurrentPage = (number) => ({
	type: SET_CURRENT_PAGE,
	payload: number,
});
