import { SET_CURRENT_PAGE } from '@models/actions/actionTypes';

const initialState = {
	currentPage: 1,
	perPage: 5,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case SET_CURRENT_PAGE:
			return {
				...state,
				currentPage: action.payload,
			};

		default:
			return state;
	}
};
