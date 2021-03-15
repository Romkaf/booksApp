import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks } from '@models/actions';
import BookTable from './BookTable';
import Spinner from '@components/Spinner';
import ErrorIndicator from '@components/ErrorIndicator';

const BookTableContainer = () => {
	const {
		books: { books, loading, error },
		filters,
		pagination,
	} = useSelector((state) => state);

	const dispatch = useDispatch();

	useEffect(() => dispatch(fetchBooks({ ...filters, ...pagination })), [
		filters,
		pagination,
	]);

	if (loading) {
		return <Spinner />;
	}

	if (error) {
		return <ErrorIndicator text={error} />;
	}

	return <BookTable books={books} />;
};

export default BookTableContainer;
