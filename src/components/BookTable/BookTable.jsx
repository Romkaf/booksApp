import React, { memo } from 'react';
import TableHead from './TableHead';
import Pagination from '@components/Pagination';
import PropTypes from 'prop-types';
import TableBody from './TableBody';

const BookTable = ({ books, loading }) => {
	return (
		<div>
			<TableHead />
			<TableBody books={books} loading={loading} />
			<Pagination />
		</div>
	);
};

BookTable.propTypes = {
	books: PropTypes.arrayOf(PropTypes.object),
	loading: PropTypes.bool,
};

export default memo(BookTable);
