import {
	SET_TITLE_FILTER,
	SET_AUTHOR_FILTER,
} from '@models/actions/actionTypes';

const initialState = {
	titleFilter: '',
	authorFilter: '',
};

export default (state = initialState, action) => {
	switch (action.type) {
		case SET_AUTHOR_FILTER:
			return {
				...state,
				authorFilter: action.payload,
			};

		case SET_TITLE_FILTER:
			return {
				...state,
				titleFilter: action.payload,
			};

		default:
			return state;
	}
};
