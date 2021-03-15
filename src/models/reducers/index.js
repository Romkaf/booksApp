import { combineReducers } from 'redux';
import books from './books';
import filters from './filters';
import pagination from './pagination';

export default combineReducers({
	books,
	filters,
	pagination,
});
