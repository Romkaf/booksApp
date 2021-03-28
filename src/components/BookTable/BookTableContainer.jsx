import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks } from '@models/actions';
import BookTable from './BookTable';

const BookTableContainer = () => {
	const {
		books: { books, loading },
		filters,
		pagination: { currentPage, perPage },
	} = useSelector((state) => state);

	const dispatch = useDispatch();

	React.useEffect(
		() => dispatch(fetchBooks({ ...filters, currentPage, perPage })),
		[filters, currentPage, perPage],
	);

	return <BookTable books={books} loading={loading} />;
};

export default BookTableContainer;
