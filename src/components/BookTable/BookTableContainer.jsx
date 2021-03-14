import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks } from '@models/actions';
import BookTable from './BookTable';
import Spinner from '@components/Spinner';

const BookTableContainer = () => {
	const {
		books: { books, loading, error },
		filters,
	} = useSelector((state) => state);
	const dispatch = useDispatch();

	useEffect(() => dispatch(fetchBooks(filters)), [filters]);

	if (loading) {
		return <Spinner />;
	}

	if (error) {
		return <h2>{error}</h2>;
	}

	return <BookTable books={books} />;
};

export default BookTableContainer;
