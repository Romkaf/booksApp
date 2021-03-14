import {
	FETCH_BOOKS,
	FETCH_BOOKS_SUCCESS,
	FETCH_BOOKS_ERROR,
} from './actionTypes';

import { fetchGetBooks } from '@api';

const fetchBooksRequest = () => ({
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

export const fetchBooks = () => async (dispatch) => {
	try {
		dispatch(fetchBooksRequest());
		const res = await fetchGetBooks();
		dispatch(fetchBooksSuccess(res.data));
	} catch (err) {
		dispatch(fetchBooksError(err.message));
	}
};
