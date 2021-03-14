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

export const fetchBooks = (param) => async (dispatch) => {
	try {
		const { titleFilter, authorFilter } = param;
		dispatch(fetchBooksRequest());
		const res = await fetchGetBooks(titleFilter, authorFilter);
		dispatch(fetchBooksSuccess(res.data));
	} catch (err) {
		dispatch(fetchBooksError(err.message));
	}
};
