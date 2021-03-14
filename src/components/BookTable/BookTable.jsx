import React, { useEffect } from 'react';
import Row from '@components/BookRow';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks } from '@models/actions';
import styles from './BookTable.css';

const BookTable = () => {
	const { root, row, ceil } = styles;
	const { books, loading, error } = useSelector((state) => state.books);
	const dispatch = useDispatch();

	useEffect(() => dispatch(fetchBooks()), []);

	if (loading) {
		return <h1>Loading...</h1>;
	}

	if (error) {
		return <h2>{error}</h2>;
	}

	return (
		<div>
			<table className={root}>
				<thead className={row}>
					<tr>
						<th className={ceil}>Title</th>
						<th className={ceil}>Authors</th>
						<th className={ceil}>Publisher</th>
						<th className={ceil}>Date</th>
					</tr>
				</thead>

				<tbody>
					{books.map((it) => (
						<Row item={it} key={it.id} />
					))}
				</tbody>
			</table>
		</div>
	);
};

export default BookTable;
