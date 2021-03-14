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
			const booksArr =
				action.payload.items?.map((it) => ({
					id: it.id,
					title: it.volumeInfo.title,
					authors: it.volumeInfo?.authors?.join(', ') || 'not specified',
					publisher: it.volumeInfo?.publisher || 'not specified',
					date: it.volumeInfo?.publishedDate?.slice(0, 4) || 'not specified',
				})) || [];

			return {
				books: booksArr,
				loading: false,
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
