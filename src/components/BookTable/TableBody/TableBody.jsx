import React from 'react';
import TableRow from './TableRow';
import PropTypes from 'prop-types';

const TableBody = ({ books = [] }) => {
	return (
		<tbody>
			{books.map((it) => (
				<TableRow item={it} key={it.id} />
			))}
		</tbody>
	);
};

TableBody.propTypes = {
	books: PropTypes.arrayOf(PropTypes.object),
};

export default TableBody;
