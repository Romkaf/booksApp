import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks } from '@models/actions';
import BookTable from './BookTable';

const BookTableContainer = () => {
	const {
		books: { books, loading },
		filters,
		pagination,
	} = useSelector((state) => state);

	const dispatch = useDispatch();

	useEffect(() => dispatch(fetchBooks({ ...filters, ...pagination })), [
		filters,
		pagination,
	]);

	return <BookTable books={books} loading={loading} />;
};

export default BookTableContainer;
