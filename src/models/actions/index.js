import {
	FETCH_BOOKS,
	FETCH_BOOKS_SUCCESS,
	FETCH_BOOKS_ERROR,
} from './actionTypes';

import { fetchGetBooks } from '@api';

const fetchBooks = () => ({
	type: FETCH_BOOKS,
});

const fetchBooksSuccess = (data) => ({
	type: FETCH_BOOKS_SUCCESS,
	payload: data,
});

const fetchBooksError = (err) => ({
	type: FETCH_BOOKS_ERROR,
	payload: err,
});

export const uploadBooks = (...rest) => async (dispatch) => {
	try {
		dispatch(fetchBooks());
		const res = await fetchGetBooks(...rest);
		dispatch(fetchBooksSuccess(res));
	} catch (err) {
		dispatch(fetchBooksError(err));
	}
};
