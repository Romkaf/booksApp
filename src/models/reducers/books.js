import {
	FETCH_BOOKS,
	FETCH_BOOKS_SUCCESS,
	FETCH_BOOKS_ERROR,
} from '@models/actions/actionTypes';

const initialState = {
	books: [],
	loading: false,
	error: null,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case FETCH_BOOKS:
			return {
				books: [],
				loading: true,
				error: null,
			};

		case FETCH_BOOKS_SUCCESS:
			return {
				books: action.payload,
				loading: true,
				error: null,
			};

		case FETCH_BOOKS_ERROR:
			return {
				books: [],
				loading: false,
				error: action.payload,
			};

		default:
			return state;
	}
};
