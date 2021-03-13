import React from 'react';
import Row from '@components/BookRow';
import styles from './BookTable.css';
import PropTypes from 'prop-types';

const BookTable = ({ books }) => {
	const { root, row, ceil } = styles;
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

BookTable.propTypes = {
	books: PropTypes.array,
};

export default BookTable;
